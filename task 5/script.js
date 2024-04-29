const resumeData = {
  name: "pavithran.M",
  title: "Full Stack Developer",
  contact: {
    email: "mrpavi1998@gmail.com",
    phone: "7845388159",
    location: "chennai,TanilNadu",
  },
  summary:
    "Enthusiastic full-stack developer with a passion for creating robust and scalable web applications.",
  education: [
    {
      degree: "Bachelor of Science in Mechanical",
      school: "SRM University",
      graduationYear: 2021,
    },
  ],
  experience: [
    {
      position: "Software Engineer",
      company: "wattmonk Solutions Inc.",
      location: "Chennai, India",
      startDate: "2021-01-01",
      endDate: null,
      responsibilities: [
        "Developed and maintained server-side logic using Node.js.",
        "Collaborated with front-end developers to integrate user-facing elements.",
        "Participated in code reviews and provided constructive feedback.",
      ],
    },
  ],
  skills: [
    "JavaScript",
    "Node.js",
    "React",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Git",
  ],
  languages: ["English (Fluent)", "Spanish (Basic)"],
};
// For loop to iterate over work experience
for (let i = 0; i < resume.work_experience.length; i++) {
  console.log(
    `Job Title: ${resume.work_experience[i].position}, Company: ${resume.work_experience[i].company}`
  );
}
// For-in loop to iterate over personal information
for (const key in resume.personal_info) {
  console.log(`${key}: ${resume.personal_info[key]}`);
}
// For-of loop to iterate over skills
for (const skill of resume.skills) {
  console.log(`Skill: ${skill}`);
}
// forEach loop to iterate over certifications
resume.certifications.forEach(certification => {
  console.log(`Certification: ${certification}`);
});
