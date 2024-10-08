

// src/pages/Projects.tsx
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsWrapper = styled(motion.section)`
  padding: 50px;
  background-color: #1f2833;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 720px) {
    padding: 20px;
  }
    h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 720px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

const ProjectCard = styled(motion.div)`
  color: #0b0c10;
  background-color: #c5c6c7;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05) rotateZ(1deg);
    box-shadow: 0 4px 8px rgba(69, 169, 158, 0.4);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 15px;
  flex-grow: 1;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

const Tag = styled.span`
  background-color: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
`;

const ActionButton = styled.a`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }
`;
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.15 },
  },
};
const projectVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
  const projects = [
    {
      imageUrl: "./assets/blogapp.png",
      tags: ["React", "CSS", "JavaScript"],
      title: "Blog App",
      description:
        "Developed a user-friendly blog application using React JS for the frontend and JSONDB for data storage. The app allows users to create, edit, and delete blog posts seamlessly. I focused on building a clean, responsive UI and implementing efficient state management with React hooks. The app also features dynamic routing and ensures a smooth user experience.",
      link: "https://github.com/YashGupta1510/BlogApp/tree/master/blogapplication",
    },
    {
      imageUrl: "./assets/ecomm.png",
      tags: ["JWT", "Spring Boot", "MicroServices"],

      title: "Ecommerce Backend",
      description:
        "A scalable microservices-based architecture using Java, Spring Boot, and MongoDB. The system managed core functionalities such as product catalog management, user authentication, and order processing. Integrated MySQL for relational data and implemented JWT-based security to protect user data.",
      link: "https://github.com/YashGupta1510/Ecommerce-backend",
    },
    {
      imageUrl: "./assets/review.png",
      tags: ["Spring Boot", "Angular", "MySQL"],

      title: "Review Community",
      description:
        "Designed and developed a review community platform using Java, Spring Boot and Angular to allow users to share and browse reviews on various products and services. The platform featured user authentication, rating systems, and comment functionality. This project also included implementing data persistence with MySQL and performance optimization for seamless user interaction.",
      link: "https://github.com/YashGupta1510/Review-Community-Frontend",
    },
    {
      imageUrl: "./assets/Testing.png",
      tags: ["TestNG", "Java", "Excel"],

      title: "Automation Testing for Flipkart.com",
      description:
        "This project automates 20 test cases for Flipkart.com using Selenium WebDriver, Java, TestNG, and following the Page Object Model (POM) architecture. It includes features like selective test execution based on an Excel file, central configuration through properties files, logging, and Extent Reports for detailed test reporting. Integrates with Jenkins for continuous integration and continuous deployment (CI/CD).",
      link: "https://github.com/YashGupta1510/AutomationExitTest",
    },
    {
      imageUrl: "./assets/banking.jpg",
      tags: ["Java", "Spring Boot", "MicroServices"],
      title: "Banking Service",
      description:
        "Built a robust banking service backend using Spring Boot and a microservices architecture. The system handled core banking operations such as account management, transaction processing, and user authentication. I integrated various microservices to ensure scalability, optimized performance, and secure data management. This project leveraged RESTful APIs, enabling seamless communication between services.",
      link: "https://github.com/YashGupta1510/Banking-Service",
    },
    {
      imageUrl: "./assets/transcriptor.png",
      tags: ["Java", "Spring Boot", "OpenAI"],
      title: "Voice to Text Transcriptor",
      description:
        "Designed and implemented a voice-to-text transcription service using Spring Boot and the OpenAI Whisper model. The application provides high-accuracy transcription for various audio formats, supporting real-time processing. Integrated the service with robust APIs, enabling smooth communication with other systems.",
      link: "https://github.com/YashGupta1510/SpringBootAITranscriptor",
    },
    {
      imageUrl: "./assets/zithara.jpg",
      tags: ["Flutter", "App Development"],
      title: "Zithara",
      description:
        "Win up to 100% UPI Cashback, Daily Giveaways, Gift Cards & More. At Zithara, we #SupportLocal Merchants and Reward you for doing the same. Shop at your favorite Local Shops & Restaurants and Earn ZiCoins on every UPI transaction. ",
      link: "https://play.google.com/store/apps/details?id=com.zithara.zithara",
    },
  ];

  return (
    <ProjectsWrapper
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 style={{ marginBottom: "1.5rem" }}>Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            variants={projectVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ProjectImage src={project.imageUrl} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTags>
                {project.tags.map((tag, idx) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
              </ProjectTags>
              <ActionButton href={project.link} target="_blank">
                View Project
              </ActionButton>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
};
