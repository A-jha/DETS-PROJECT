import { hashSync } from "bcrypt";
const data = {
  students: [
    {
      isAdmin: false,
      name: "Shubham Singh",
      email: "xxx9@gmail.com",
      password: hashSync("123456789", 5),
      about: "Simply Aj",
      stream: "IT",
      slug: "shubham-singh",
      yearIn: "2017",
      yearOut: "2021",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2017",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Avinash Kumar Jha",
      email: "xxx8@gmail.com",
      password: hashSync("123456789", 5),
      about: "Simply Aj",
      stream: "IT",
      slug: "avinash-kumar-jha",
      yearIn: "2018",
      yearOut: "2022",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2020",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Jukta Maitra",
      about: "Simply Aj",
      email: "xxx7@gmail.com",
      password: hashSync("123456789", 5),
      stream: "EIE",
      slug: "jukta-maitra",
      yearIn: "2018",
      yearOut: "2022",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2020",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Ashish Kumar",
      about: "Simply Aj",
      email: "xxx6@gmail.com",
      password: hashSync("123456789", 5),
      stream: "EIE",
      slug: "ashish-kumar",
      yearIn: "2019",
      yearOut: "2023",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2020",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Sunai Biswas",
      about: "Simply Aj",
      email: "xxx5@gmail.com",
      password: hashSync("123456789", 5),
      stream: "IT",
      slug: "sunai-biswas",
      yearIn: "2019",
      yearOut: "2023",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2020",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Santanu Rana",
      about: "Simply Aj",
      email: "xxx4@gmail.com",
      password: hashSync("123456789", 5),
      stream: "IT",
      slug: "santanu-rana",
      yearIn: "2020",
      yearOut: "2024",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2020",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Sruti Sen",
      about: "Simply Aj",
      email: "xxx3@gmail.com",
      password: hashSync("123456789", 5),
      stream: "EIE",
      slug: "sruti-sen",
      yearIn: "2020",
      yearOut: "2024",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2020",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Rishabh Barnwal",
      about: "Simply Aj",
      email: "xxx2@gmail.com",
      password: hashSync("123456789", 5),
      stream: "IT",
      slug: "rishabh-barnwal",
      yearIn: "2021",
      yearOut: "2025",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2020",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Cute Riya",
      about: "Simply Aj",
      email: "xxx1@gmail.com",
      password: hashSync("123456789", 5),
      stream: "EIE",
      slug: "cute-riya",
      yearIn: "2021",
      yearOut: "2025",
      skills: [
        {
          title: "Programming",
          name: "C++",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Java",
          rating: 8,
        },
        {
          title: "Front-End",
          name: "Python",
          rating: 8,
        },
        {
          title: "Programming",
          name: "Javascript",
          rating: 8,
        },
      ],
      social: [
        {
          name: "Github",
          link: "https://github.com/A-Jha",
        },
        {
          name: "linkedIn",
          link: "https://www.linkedin.com/in/avvinashjha/",
        },
      ],
      certification: [
        {
          name: "Core Java",
          link: "https://github.com/A-Jha",
          start: "2021",
          end: "2022",
        },
        {
          name: "Core Python",
          link: "https://github.com/A-Jha",
          start: "2020",
          end: "2021",
        },
      ],
      projects: [
        {
          name: "Github Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },

        {
          name: "Job Search",
          hosted: "https://github.com/A-Jha",
          code: "https://github.com/A-Jha",
        },
      ],
      gender: "male",
    },
  ],
  notice: [
    {
      title: "Test Notice -1",
      body: "This notice is regarding how it will look",
      postedBy: "Avinash Jha",
      postedOn: new Date().toDateString(),
      links: [
        {
          title: "Github Code",
          link: "http://github.com/A-Jha",
        },
      ],
    },
    {
      title: "Lecture on Road Safety",
      body: "Our school has invited Mr Ram Kumar, the Inspector of Police (Traffic), to deliver a lecture on Road Safety in our school on 15th March from 10:00 AM to 11:30 PM. All students are requested to assemble in the school auditorium with their respective class teachers before 10:00 AM.",
      postedBy: "Avinash Jha",
      postedOn: new Date().toDateString(),
      links: [
        {
          title: "Github Code",
          link: "http://github.com/A-Jha",
        },
      ],
    },
    {
      title: "Book Exhibition on Teacher’s Day",
      body: "On the occasion of Teacher’s Day, our school is organising a book exhibition in the school auditorium on 5th September 2020 from 10:00 AM to 5:00 PM. Our school library is offering a 50% discount on MRP on the purchase of books at the book exhibition.",
      postedBy: "Avinash Jha",
      postedOn: new Date().toDateString(),
      links: [
        {
          title: "Github Code",
          link: "http://github.com/A-Jha",
        },
      ],
    },
  ],
  feedback: [
    {
      name: "Avinash Jha",
      body: "Simple but beautiful and powerful too",
    },
    {
      name: "Avinash Jha",
      body: "Simple but beautiful and powerful too",
    },
    {
      name: "Avinash Jha",
      body: "Simple but beautiful and powerful too",
    },
  ],
  admin: [
    {
      name: "Admin",
      password: hashSync("Admin", 5),
      email: "admin@detsconnect.com",
      isAdmin: true,
    },
    {
      name: "user",
      password: hashSync("user", 5),
      email: "user@detsconnect.com",
      isAdmin: false,
    },
  ],
};

export default data;
