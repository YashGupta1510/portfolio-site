// src/pages/Projects.tsx
// import styled from "styled-components";
// import { motion } from "framer-motion";

// const ProjectsWrapper = styled(motion.section)`
//   padding: 50px;
//   background-color: #1f2833;
//    @media (max-width: 720px) {
//    padding:20px;
//   }
// `;

// const ProjectsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   gap: 30px;
//   margin: 10px 0px 0px 0px;
// `;

// const ProjectCard = styled(motion.div)`
//   color:#0b0c10;
//   background: #c5c6c7;
//   padding: 20px;
//   border-radius:15px;
//   box-shadow: 0 4px 8px rgba(69, 169, 158, 0.4);
// `;
// const Button = styled.button`
//   background: #1f2833;
//   color: #c5c6c7;
//   padding: 0.25em 1em;
//   border: 2px solid #45a29e;
//   border-radius: 5px;
// `;

// const containerVariants = {
//   hidden: { opacity: 0, y: 100 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.5, staggerChildren: 0.15 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0 },
// };

// export const Projects = () => {
//   const projects = [
//     {
//       title: "Blog App",
//       description: "Developed a user-friendly blog application using React JS for the frontend and JSONDB for data storage. The app allows users to create, edit, and delete blog posts seamlessly. I focused on building a clean, responsive UI and implementing efficient state management with React hooks. The app also features dynamic routing and ensures a smooth user experience.",
//       link: "https://github.com/YashGupta1510/BlogApp/tree/master/blogapplication",
//     },
//     {
//       title: "Ecommerce Backend",
//       description:
//         "In my e-commerce backend project, I developed a scalable microservices-based architecture using Java, Spring Boot, and MongoDB. The system managed core functionalities such as product catalog management, user authentication, and order processing. I integrated MySQL for relational data and implemented JWT-based security to protect user data. Additionally, I worked on optimizing the inventory management system, ensuring smooth and efficient operations. The project also involved designing and consuming RESTful APIs and deploying services on AWS for a cloud-based infrastructure.",
//       link: "https://github.com/YashGupta1510/Ecommerce-backend",
//     },
//     {
//       title: "Review Community",
//       description: "Designed and developed a review community platform using Java, Spring Boot and Angular to allow users to share and browse reviews on various products and services. The platform featured user authentication, rating systems, and comment functionality. I focused on creating a scalable architecture that efficiently handled user data and reviews, with secure API integrations and a robust backend system. This project also included implementing data persistence with MySQL and performance optimization for seamless user interaction.",
//       link: "https://github.com/YashGupta1510/Review-Community-Frontend",
//     },
//     {
//       title: "Automation Testing for Flipkart.com",
//       description: "This project automates 20 test cases for Flipkart.com using Selenium WebDriver, Java, TestNG, and following the Page Object Model (POM) architecture. It includes features like selective test execution based on an Excel file, central configuration through properties files, logging, and Extent Reports for detailed test reporting. The project also utilizes custom-made utility JAR files for common functionalities and integrates with Jenkins for continuous integration and continuous deployment (CI/CD).",
//       link: "https://github.com/YashGupta1510/AutomationExitTest",
//     },
//     {
//       title: "Banking Service",
//       description: "Built a robust banking service backend using Spring Boot and a microservices architecture. The system handled core banking operations such as account management, transaction processing, and user authentication. I integrated various microservices to ensure scalability, optimized performance, and secure data management. This project leveraged RESTful APIs, enabling seamless communication between services.",
//       link: "https://github.com/YashGupta1510/Banking-Service",
//     }
//   ];

//   return (
//     <ProjectsWrapper
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       <h2 style={({ marginBottom: '0.8rem' }) }>Projects</h2>
//       <ProjectsGrid>
//         {projects.map((project, index) => (
//           <ProjectCard key={index} variants={itemVariants}>
//             <h3 style={({ marginBottom: '0.8rem', color: '#0b0c10'}) }>{project.title}</h3>
//             <p style={({ marginBottom: '0.8rem' }) }>{project.description}</p>
//             <Button>
//             <a href={project.link} target="_blank" rel="noopener noreferrer" >
//               View Project
//             </a></Button>
//           </ProjectCard>
//         ))}
//       </ProjectsGrid>
//     </ProjectsWrapper>
//   );
// };

// ]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// src/pages/Projects.tsx
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsWrapper = styled(motion.section)`
  padding: 50px;
  background-color: #1f2833;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled(motion.div)`

color:#0b0c10;
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
        "Designed and developed a review community platform using Java, Spring Boot and Angular to allow users to share and browse reviews on various products and services. The platform featured user authentication, rating systems, and comment functionality. I focused on creating a scalable architecture that efficiently handled user data and reviews, with secure API integrations and a robust backend system. This project also included implementing data persistence with MySQL and performance optimization for seamless user interaction.",
      link: "https://github.com/YashGupta1510/Review-Community-Frontend",
    },
    {
      imageUrl: "./assets/Testing.png",
      tags: ["TestNG", "Java", "Excel"],

      title: "Automation Testing for Flipkart.com",
      description:
        "This project automates 20 test cases for Flipkart.com using Selenium WebDriver, Java, TestNG, and following the Page Object Model (POM) architecture. It includes features like selective test execution based on an Excel file, central configuration through properties files, logging, and Extent Reports for detailed test reporting. The project also utilizes custom-made utility JAR files for common functionalities and integrates with Jenkins for continuous integration and continuous deployment (CI/CD).",
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
  ];

  return (
    <ProjectsWrapper
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2 style={({ marginBottom: '1rem' }) }>Projects</h2>
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
