// src/pages/Home.tsx
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  padding: 0.5rem;
  background: url('./assets/image.png') no-repeat center center/cover;
`;

const HeroText = styled(motion.div)`
  color: white;
  text-align: center;
  padding-bottom:10vh;
  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 1.5rem;
    margin-top: 20px;
  }
`;

export const Home = () => {
  return (
    <HomeWrapper>
      <HeroText
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1>Yash Gupta</h1>
        <p>Backend Developer working with Java, Spring boot and AWS</p>
      </HeroText>
    </HomeWrapper>
  );
};
