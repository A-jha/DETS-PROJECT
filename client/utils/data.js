import { hashSync } from "bcrypt";
const data = {
  students: [
    {
      isAdmin: false,
      name: "Shubham Singh",
      email: "xxx1@gmail.com",
      password: hashSync("123456789", 5),
      about: "Hi I am Shubham Singh",
      stream: "IT",
      slug: "shubham-singh",
      yearIn: "2017",
      yearOut: "2021",
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
      company: [
        {
          companyName: "ISC, Bangalore",
          title: "student",
          joining: "1/07/2022",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Avik Samanta",
      email: "xxx9@gmail.com",
      password: hashSync("123456789", 5),
      about: "Hi I am Avik Samanta",
      stream: "IT",
      slug: "avik-samanta",
      yearIn: "2016",
      yearOut: "2020",
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
      company: [
        {
          companyName: "Cisco",
          title: "Software Developer",
          joining: "1/07/2022",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Debashish Roy",
      email: "roy@gmail.com",
      password: hashSync("123456789", 5),
      about: "Hi I am Debashish Roy",
      stream: "IT",
      slug: "debashish-roy",
      yearIn: "2016",
      yearOut: "2020",
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
      company: [
        {
          companyName: "Relevel",
          title: "Backend Developer",
          joining: "1/06/2022",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Avinash Jha",
      email: "avinashjha@gmail.com",
      password: hashSync("123456789", 5),
      about: "Hi I am Avinash Jha",
      stream: "IT",
      slug: "avinash-jha",
      yearIn: "2018",
      yearOut: "2022",
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
      company: [
        {
          companyName: "Media.net",
          title: "Web Application Developer",
          joining: "1/08/2022",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Arpita Das",
      email: "arp9@gmail.com",
      password: hashSync("123456789", 5),
      about: "Hi I am Arpita Das",
      stream: "IT",
      slug: "arpita-das",
      yearIn: "2018",
      yearOut: "2022",
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
      company: [
        {
          companyName: "NIT, Durgapur",
          title: "M.Tech",
          joining: "1/08/2022",
        },
      ],
      gender: "male",
    },
    {
      isAdmin: false,
      name: "Hritik Raj",
      email: "sam@gmail.com",
      password: hashSync("123456789", 5),
      about: "Hi I am Hritik Raj",
      stream: "IT",
      slug: "hritik-raj",
      yearIn: "2018",
      yearOut: "2022",
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
      company: [
        {
          companyName: "Wipro",
          title: "Project Engineer",
          joining: "1/08/2022",
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
