import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
  color: salmon;
  font-size: 50px;
`;

const About = props => (
  <div>
    <Title>About page</Title>
    <Link href="/">
        <a>Home Page</a>
    </Link>
  </div>
);

export default About;
