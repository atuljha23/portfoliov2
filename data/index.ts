export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize clean, modern design and user-friendly interfaces.",
    description: "Because who doesn't love a good-looking website?",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/laptop.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "I can talk to you from the future or the past!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description:
      "I constantly try to improve. Like a fine wine, I get better with age.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "My Hobbies include playing guitar, learning new technologies and playing video games",
    description: "Because all work and no play makes Jack a dull boy.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently building a Full Stack Chat App",
    description:
      "The Inside Scoop: It's going to be legen... wait for it... dary!",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Signal Chat App - Discord Clone",
    des: "Full stack responsive chat app using sockets for realtime communication.User can create groups and upload files and download files. Tech used React, Node.js, Express, MongoDB, Socket.io, Zustand and many more awesome tech to create this app.",
    img: "/chatApp.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/socketio.png",
      "/next.svg",
    ],
    link: "https://github.com/atuljha23/SignalChatApp",
  },
  {
    id: 2,
    title: "SocialGram - Instagram Clone",
    des: "Explore social media with this user-friendly platform that has a nice look and lots of features. Easily create and explore posts, and enjoy a strong authentication system and quick data fetching using React Query for a smooth user experience.",
    img: "/socialgram.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/c.svg"],
    link: "https://github.com/atuljha23/SocialGram",
  },
  {
    id: 3,
    title: "3D Animated Portfolio Website",
    des: "A 3D animated portfolio website that showcases my work and projects. Built with React, Three.js, AcernityUI, and Tailwind CSS.",
    img: "/portfolio.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/next.svg"],
    link: "https://github.com/atuljha23/iamatuljha-portfolio",
  },
  {
    id: 4,
    title: "IMDB Clone",
    des: "A full stack responsive IMDB clone with a nice look and lots of features. Easily explore movies, TV shows, and celebrities. Built with React, Node.js, Express, MongoDB, and Tailwind CSS.",
    img: "/imdb-clone.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb-icon-2.svg",
      "/re.svg",
    ],
    link: "https://github.com/atuljha23/imdb-clone",
  },
];

export const testimonials = [
  {
    quote:
      "It will be an extreme pleasure to recommend Atul as a reliable and dedicated candidate for any organization. Atul provided in great capacity his excellent skill to LCP and was responsible for the development of EAWA (website) for one of our initiatives. Atul has shown excellent work ethics to the team. Atul pays exquisite attention to detail and has a unique and creative mind. He showed excellent communication skills and consistently exceeded company expectations. On a personal level, He is charismatic and well-spoken, both qualities that have served him very well in our organization. He is also extremely organized, flexible and patient enough to get a result. Atul can work independently or as a team player. He is able to follow through to ensure a work well done. Atul will be a great individual for any organization and I heartily endorse him for his skills. Atul is a pleasure to work with",
    name: "Ini Usanga",
    title: "Founder/Global Overseer at Love and Care for People Worldwide",
    img: "/ini.jpeg",
  },
  {
    quote:
      "I rarely come across real talents who stand out like Atul. I had the pleasure of training Atul as a part of GAIP Academic Internship in which he went through a 21 days of Big Data training associated with HPE Singapore. Atul was not only exceptionally good but also helped his fellow teammates on and during training process to help them debug their projects showcasing outstanding qualities of a team player. His performance resulted into being selected as one of the GAIP Champions. He would be a great asset to any organization. I wish him all the best for his future endeavours.",
    name: "Ravindra Kumar",
    title: "Director of OpenSource Private Limited",
    img: "/ravindra.jpeg",
  },
  {
    quote:
      "Atul was one of the selected students for the GAIP Internship Programme 2018 at NUS Singapore. As an Interviewer, I really liked his passion and interest towards Machine Learning and his excellent knowledge in the field of Data Science. His performance resulted into being selected as one of the GAIP Champions and his duty was to conduct technical interviews with the new applicants of 2019. He also has outstanding communication skills. His interest towards technologies keeps him curious to learn more. I wish him all the best for future.",
    name: "Jayesh Rathore",
    title: "Director of Corporate Gurukul",
    img: "/jayesh.jpeg",
  },
  {
    quote:
      "Atul has excellent knowledge of his scope and he is always excited to learn new things and to engage himself in projects, he is a constant learner who is always looking to become even better in what he does. I was Atul's supervisor in one of his research paper intitled Anomaly Detection in Real time series dataset , he proved that he possessed excellent technical skills and we were able to co-operate with the utmost success. He has excellent skills in Machine Learning and Data Visualisation.",
    name: "Dr. Abhineet Anand",
    title: "Dean of Computer Science and Engineering at Galgotias University",
    img: "/abhineet.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Software Engineer",
    desc: "As a Senior Software Engineer, I lead the design and development of robust web applications from scratch using React, JavaScript, HTML/CSS, and Node.js. My work focused on designing and developing highly scalable and User Friendly Web Applications.",
    className: "md:col-span-2",
    thumbnail: "/carelon.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    desc: "As a Software Developer with a focus on SAP Extension Suit development, I have been responsible for designing, developing, deploying, and maintaining various SAP Extension Suit applications using JavaScript, HTML, CSS, and Node.js (Backend Framework).",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/SAP-logo.svg",
  },
  {
    id: 3,
    title: "Graduate Software Developer",
    desc: "Completed a comprehensive three-month Full-stack Development Bootcamp. Led and designed full-stack application that streamlined managerial tasks, reducing workload and increasing efficiency. I also led the development of a website using Angular/Typescript on Node JS, showcasing the work undertaken by DXC in Galway.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/dxc.svg",
  },
  {
    id: 4,
    title: "Academic Intern",
    desc: "During my tenure as an Academic Intern in the Global Academic Internship Program, I had the privilege of working alongside National University Singapore and Hewlett-Packard Enterprise, Asia-Pacific, under the guidance of esteemed advising professors at NUS. My focus during this internship was on Data Analytics using Artificial Neural Networks and Machine Learning.",
    className: "md:col-span-2",
    thumbnail: "/NUS.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
