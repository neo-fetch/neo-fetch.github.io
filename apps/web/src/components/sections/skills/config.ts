import type { Skill } from "@/types/skill";
/**
Technical Skills
Languages, libraries and frameworks:: Python, React, Nodejs, Devops: Jenkins, AWS (EC2 + microservices),
Linux with various distributions, LLMs: ollama with llama and other LLMs, Finetuning LLMs and solutions based
on them, offline implementations without ollama, HPC: Infra segmentation for different distributions on shared
hardware using virt-manager, qemu, Proxmox VE, C, C++, Rust, GO, Java, AWS Neptune, Nvidia Modulus,
Nvidia DGX, Apache Spark, Pytorch, Tensorflow with keras, sklearn

In addition to that I also know deep learning and machine learning concepts, architecture concepts, devops, and
cloud computing. I have worked on various projects and have experience in the following areas:\
- Web Development 
- Deep Learning (LLMs and PINNs)
- Machine Learning
- Data Science
- Software Development
- Research
- Teaching
- DevOps
- Cloud Computing
 */
const skills: Skill[] = [
  {
    name: "Web Development",
    // todo: use proper thumbnail pics
    thumbnail: "/images/skills/web-development.jpg",
    description: `Web Development involves creating websites and web applications that are both visually appealing and highly functional. It encompasses a variety of technologies, frameworks, and best practices to ensure a seamless user experience and efficient performance.`,
  },
  {
    name: "Deep Learning",
    thumbnail: "/images/skills/deep-learning.jpg",
    description: `Deep Learning is a subset of machine learning that uses neural networks to model and solve complex problems. It is used in a variety of applications, including image recognition, natural language processing, and speech recognition.`,
  },
  {
    name: "Machine Learning",
    thumbnail: "/images/skills/machine-learning.jpg",
    description: `Machine Learning is a subset of artificial intelligence that uses statistical techniques to enable computers to learn from data and make predictions or decisions without being explicitly programmed. It is used in a variety of applications, including recommendation systems, fraud detection, and predictive maintenance.`,
  },
  {
    name: "Data Science",
    thumbnail: "/images/skills/data-science.jpg",
    description: `Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines statistics, machine learning, and domain expertise to uncover hidden patterns, trends, and correlations that can inform business decisions and strategies.`,
  },
  {
    name: "Software Development",
    thumbnail: "/images/skills/software-development.jpg",
    description: `Software Development is the process of designing, programming, testing, and maintaining software applications and systems. It encompasses a variety of programming languages, tools, and methodologies to create high-quality software products that meet user needs and business requirements.`,
  },
  {
    name: "Research",
    thumbnail: "/images/skills/research.jpg",
    description: `Research is a systematic investigation into a specific topic or problem to discover new knowledge, validate existing theories, or develop new technologies. It involves formulating hypotheses, designing experiments, collecting and analyzing data, and drawing conclusions based on evidence.`,
  },
  {
    name: "Teaching",
    thumbnail: "/images/skills/teaching.jpg",
    description: `Teaching is the process of imparting knowledge, skills, and values to students through instruction, demonstration, and assessment. It involves creating lesson plans, delivering lectures, facilitating discussions, and evaluating student performance to promote learning and academic success.`,
  },
  {
    name: "DevOps",
    thumbnail: "/images/skills/devops.jpg",
    description: `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and provide continuous delivery of high
quality software. It involves automating processes, monitoring performance, and fostering collaboration between development and operations teams to improve efficiency and reliability.`,
  },
  {
    name: "Cloud Computing",
    thumbnail: "/images/skills/cloud-computing.jpg",
    description: `Cloud Computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale. It enables organizations to scale resources up or down as needed, pay only for what they use, and access applications and data from anywhere with an Internet connection.`,
  },
];

export { skills };
