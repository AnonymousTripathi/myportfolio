
import twitter from "../assets/projects/twitter.png"
import zeroth from "../assets/projects/zeroth.png"
import portfolio from "../assets/projects/portfolio.png"
export const HERO_CONTENT = `I am a Full Stack Developer eager to leverage a strong skillset in the MERN stack (MongoDB, Express.js, React.js, Node.js). Proven ability to learn quickly and apply theoretical knowledge to practical scenarios. Seeking an opportunity to contribute to challenging projects and further develop expertise in building scalable and efficient web applications.`;

// export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "December 2024",
    role: "AWS APAC's Solutions Architecture ",
    company: "Forage",
    description: `Designed and simple and scalable hosting architecture based on Elastic
 Beanstalk for a client experiencing significant growth and slow response
 times.
 Described my proposed architecture in plain language ensuring my client
 understood how it works and how costs will be calculated for it.`,
    technologies: [],
  },
  
];

export const PROJECTS = [
 
  {
    title: "Twitter Clone with Custom Frontend and Toxic Comment Moderation ",
    image: twitter,
    description:
      "Developed a full-stack Twitter clone using the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring a unique frontend interface. Implemented client-side toxic comment moderation using TensorFlow.js to enhance user experience and safety.",
    technologies: ["Express.js", "React.js", "Node.js", "MongoDB","Tailwind CSS","TensorFlow.js"],
    link:"https://x-clone-su9s.onrender.com/",
  },
  {
    title: "AI-Powered Chatbot",
    image: zeroth,
    description:
      "Designed and implemented a user-friendly chatbot interface using React.js, enabling seamless interaction with the Google Gemini API to provide intelligent and context-aware responses to user queries.",
    technologies: ["React.js", "Tailwind CSS","Google Gemini API"],
    link:"https://zerothai.onrender.com/"
  },
  
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React.js", "Tailwind CSS","Framer Motion"],
    link:"/"
  }, 
  {
    title: "Full Stack E-commerce Website with AI Product Description",
    image: portfolio,
    description:
      "A complete MERN-based e-commerce platform with integrated AI-powered product description generation using Cohere API. Features include filtering, size selection, cart system, Razorpay payments, order tracking, and a secure admin dashboard for product, user, and order management.",
    technologies: ["Express.js", "React.js", "Node.js", "MongoDB","Tailwind CSS","Cohere API"],
    link:"/"
  }, 
];

export const CONTACT = {
  address: " New Delhi,India ",
  phoneNo: "+91 9810182242 ",
  email: "tripathiharsh227@gmail.com",
};
