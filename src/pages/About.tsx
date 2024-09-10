
// src/pages/About.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutWrapper = styled(motion.section)`
  padding: 50px;
  height: 90vh;
  background-color: #1f2833;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AboutContent = styled.div`
  max-width: 800px;
  text-align: center;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
  }
`;
const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

export const About = () => {
  return (
    <AboutWrapper
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AboutContent>
      <h2>About Me</h2>
        <p>I am Yash Gupta, a passionate Java Backend Developer with a strong focus on building scalable, high-performance applications. With hands-on experience in Java, Spring Boot, and microservices architecture, I’ve developed backend systems for various industries, including e-commerce. I specialize in creating efficient APIs, integrating databases like MySQL and MongoDB, and deploying solutions on AWS.
My expertise extends to automation and QA, and I enjoy solving complex problems with clean, maintainable code. I thrive in dynamic environments, collaborating with cross-functional teams to deliver impactful, high-quality software. I'm always eager to learn new technologies and improve my skills. Let’s connect and create something amazing together!</p>
      </AboutContent>
    </AboutWrapper>
  );
};
