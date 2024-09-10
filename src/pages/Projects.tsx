// src/pages/Projects.tsx
import styled from "styled-components";
import { motion } from "framer-motion";

const ProjectsWrapper = styled(motion.section)`
  padding: 50px;
  background-color: #1f2833;
   @media (max-width: 720px) {
   padding:20px;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin: 10px 0px 0px 0px;
`;

const ProjectCard = styled(motion.div)`
  color:#0b0c10;
  background: #c5c6c7;
  padding: 20px;
  border-radius:15px;
  box-shadow: 0 4px 8px rgba(69, 169, 158, 0.4);
`;
const Button = styled.button`
  background: #1f2833;
  color: #c5c6c7;
  padding: 0.25em 1em;
  border: 2px solid #45a29e;
  border-radius: 5px;
`;

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export const Projects = () => {
  const projects = [
    {
      title: "Blog App",
      description: "<= Description =>",
      link: "https://github.com/YashGupta1510/BlogApp/tree/master/blogapplication",
    },
    {
      title: "Ecommerce Backend",
      description:
        "In my e-commerce backend project, I developed a scalable microservices-based architecture using Java, Spring Boot, and MongoDB. The system managed core functionalities such as product catalog management, user authentication, and order processing. I integrated MySQL for relational data and implemented JWT-based security to protect user data. Additionally, I worked on optimizing the inventory management system, ensuring smooth and efficient operations. The project also involved designing and consuming RESTful APIs and deploying services on AWS for a cloud-based infrastructure.",
      link: "https://github.com/YashGupta1510/Ecommerce-backend",
    },
    {
      title: "Review Community",
      description: "<= Description =>",
      link: "https://github.com/YashGupta1510/Review-Community-Frontend",
    },
    {
      title: "Review Community",
      description: "<= Description =>",
      link: "https://github.com/YashGupta1510/Review-Community-Frontend",
    },
    {
      title: "Review Community",
      description: "<= Description =>",
      link: "https://github.com/YashGupta1510/Review-Community-Frontend",
    }
  ];

  return (
    <ProjectsWrapper
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 style={({ marginBottom: '0.8rem' }) }>Projects</h2>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index} variants={itemVariants}>
            <h3 style={({ marginBottom: '0.8rem', color: '#0b0c10'}) }>{project.title}</h3>
            <p style={({ marginBottom: '0.8rem' }) }>{project.description}</p>
            <Button>
            <a href={project.link} target="_blank" rel="noopener noreferrer" >
              View Project
            </a></Button>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsWrapper>
  );
};
