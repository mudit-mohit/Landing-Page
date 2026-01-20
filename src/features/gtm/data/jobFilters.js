export const jobFilters = [
  {
    id: "date_posted",
    label: "Date Posted",
    options: [
      { value: "all", label: "Any Time" },
      { value: "today", label: "Past 24 Hours" },
      { value: "3days", label: "Past 3 Days" },
      { value: "week", label: "Past Week" },
      { value: "month", label: "Past Month" },
    ],
  },
  {
    id: "employment_type",
    label: "Job Type",
    options: [
      { value: "FULLTIME", label: "Full-Time" },
      { value: "CONTRACTOR", label: "Contract" },
      { value: "PARTTIME", label: "Part-Time" },
      { value: "INTERN", label: "Internship" },
    ],
  },
  {
    id: "job_requirements",
    label: "Remote / On-site",
    options: [
      { value: "under_3_years_experience", label: "Entry Level" }, // Mapping JSearch specific
      { value: "more_than_3_years_experience", label: "Senior Level" },
      { value: "no_degree", label: "No Degree Required" },
      { value: "no_experience", label: "No Experience" }
    ],
  },
];