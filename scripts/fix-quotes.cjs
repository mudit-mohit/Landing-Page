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

const fixQuotes = (file) => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Fix: import ... from "...'; -> import ... from "...";
    // Matches: from "anything';
    const regex = /from\s+"(.*?)(?<!\\)';/g;

    content = content.replace(regex, (match, p1) => {
        return `from "${p1}";`;
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed Quotes: ${path.relative(process.cwd(), file)}`);
    }
};

// Run on Pages
walk(path.join(process.cwd(), 'src/pages/GtmSquad'), (err, files) => {
    if (err) throw err;
    if (files) files.forEach(fixQuotes);
});
