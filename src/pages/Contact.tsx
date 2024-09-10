// src/pages/Contact.tsx
import styled from 'styled-components';
import { FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #1f2833;
  h2{
 margin-bottom:1rem;
 }
 p{
 margin:0.2rem;}
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
 
  a {
    font-size: 2rem;
    color: #333;
  }
`;


export const Contact = () => {
  return (
    <ContactWrapper>
      <h2>Contact Me</h2>
      <p>Email: <a href="mailto:gyash1510@gmail.com">gyash1510@gmail.com</a></p>
      <p>Phone: +917881132091</p>
      <p>My resume - </p> <a href='https://drive.google.com/file/d/1iE5T_b5w2OxfqN-ktQqUq5Xvydw_hdhX/view?usp=sharing'><FaFileAlt color="white"/></a>
      <SocialIcons>
        <a href="https://github.com/YashGupta1510"><FaGithub color="white"  /></a>
        <a href="https://www.linkedin.com/in/yash-gupta-46b4961aa/"><FaLinkedin color="white" /></a>
      </SocialIcons>
    </ContactWrapper>
  );
};
