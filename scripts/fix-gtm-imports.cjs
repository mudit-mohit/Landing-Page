const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
    let results = [];
    fs.readdir(dir, (err, list) => {
        if (err) return done(err);
        let pending = list.length;
        if (!pending) return done(null, results);
        list.forEach((file) => {
            file = path.resolve(dir, file);
            fs.stat(file, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    walk(file, (err, res) => {
                        results = results.concat(res);
                        if (!--pending) done(null, results);
                    });
                } else {
                    if (file.endsWith('.jsx')) results.push(file);
                    if (!--pending) done(null, results);
                }
            });
        });
    });
};

const srcRoot = path.join(process.cwd(), 'src');

const fixImports = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Calculate correct relative path to src
    // e.g. ../../../
    let relToSrc = path.relative(path.dirname(file), srcRoot).replace(/\\/g, '/');

    // Regex to match ANY relative import pointing to root folders
    // Matches: from "../../components", from "../../../hooks", from "../components"
    // It captures:
    // 1. The relative path part (ignored in replacement)
    // 2. The target folder (components, hooks, etc)
    const regex = /from\s+['"](\.\.\/)+(components|hooks|services|lib|assets|utils)/g;

    content = content.replace(regex, (match, p1, folder) => {
        return `from "${relToSrc}/${folder}`;
    });

    // Special handling for features/gtm imports within Pages
    // Pages in GtmSquad were importing "../features/..."
    // They need to import "../../features/gtm/..."
    if (file.includes('src\\pages\\GtmSquad') || file.includes('src/pages/GtmSquad')) {
        content = content.replace(/from\s+['"]\.\.\/features/g, `from "${relToSrc}/features/gtm`);
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed: ${path.relative(process.cwd(), file)}`);
    }
};

// Run on Features
walk(path.join(process.cwd(), 'src/features/gtm'), (err, files) => {
    if (err) throw err;
    files.forEach(fixImports);
});

// Run on Pages
walk(path.join(process.cwd(), 'src/pages/GtmSquad'), (err, files) => {
    if (err) throw err;
    if (files) files.forEach(fixImports);
});
