import React,{ ReactNode } from 'react';
import styled, { keyframes } from "styled-components";

const MainContainer = styled.section`
  width: 50%;
  height: 100%;
  padding: 0.5rem;
  margin: 2rem;
  background-color: #e8ecfb;
`;

const Title = styled.h1`
  color: white;
  text-align: center;
  padding: 0.5rem;
  background: linear-gradient(to right, #39bff9, #9d64ff);
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
`;

const Button = styled.button<{ buttonType?: string }>`
  width: 100px;
  height: 30px;
  color: white;
  border: none;
  border-radius: 0.5rem;
  margin: 1rem;
  text-align: center;
  background-color: ${({ buttonType }) => (buttonType === "ok" ? "#39bff9" : "#f7204b")};
`;

const DefaultButton = styled.button`
  width: 120px;
  height: 30px;
  color: #FDFEFE;
  border: none;
  border-radius: 0.5rem;
  margin: 1rem;
  align:center;
  background-color: #39bff9;
`

const ModifyButton = styled(DefaultButton)`
  background-color: #52BE80;
`

const DeleteButton = styled(DefaultButton)`
  background-color: #f7204b;
`

interface CustomButtonProps {
  prefix?: string;
  suffix?: string;
  children: ReactNode; // Use ReactNode to allow any valid React child elements
}

const CustomButton = ({ prefix, suffix, children, ...props }: CustomButtonProps) => {
  const modifiedText = `${prefix ? prefix : ''} ${children} ${suffix ? suffix : ''}`;
  return <DefaultButton {...props}>{modifiedText}</DefaultButton>;
};

interface LinkProps {
  className?: string;
  children: ReactNode;
  href?: string; 
}

const Link = ({ className, children, href }: LinkProps) => (
  <a className={className} href={href}>
    {children}
  </a>
);

const DefaultLink = styled(Link)`
  color: #39bff9;
  margin: 1rem;
  text-decoration: none;
`;

const StyledLink = styled(DefaultLink)`
  color: #fff !important;
  background-color: #F1948A;
  border-radius: 0.5rem;
  padding: 0.5rem;
`;

const LinkDiv = styled.div`
  margin:2rem;
`;

const PseudoDiv = styled.p.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  :first-child {
    color: #FF00FF;
    font-variant: small-caps;
  }

  :last-child {
    color: #800080;
  }

  :first-letter {
    color: #000000;
    font-size: large;
  }

  .intro {
    &::first-letter {
      font-size: xx-large;
      color: #ff0000;
    }
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-25px);
  }
`;

const BouncingRocket = styled.div`
  display: inline-block;
  animation: ${bounce} 1s linear infinite;
  font-size: 3rem;
  padding: 2rem 1rem;
  margin:0px 0px 0px 50px;
`;

function StyledComponentsExample() {
  return (
    <MainContainer>
      <Title>Hello World</Title>
      <Button buttonType="ok">OK</Button>
      <Button>Cancel</Button>
      <hr></hr>
      <DefaultButton>View</DefaultButton>
      <ModifyButton>Edit</ModifyButton>
      <DeleteButton>Delete</DeleteButton>
      <hr></hr>
      <DefaultButton>Normal</DefaultButton>
      <CustomButton prefix="⭐️" suffix="⭐️">
        Custom
      </CustomButton>
      <hr></hr>
      <LinkDiv>
      <Link href="https://example.com">Non-Style Link</Link>
      <DefaultLink href="https://example.net">Default Link</DefaultLink>
      <StyledLink href="https://example.org">Styled Link</StyledLink>
      </LinkDiv> 
      <hr></hr>
      <PseudoDiv>
        <p className = "intro">Lorem ipsum dolor sit amet, prompta fastidii ponderum duo no, mel an libris salutandi. Et labitur convenire sit, ad commune efficiendi neglegentur has. </p>
        <p>Et his eruditi vocibus repudiandae, fugit quaeque id nam, his in decore officiis intellegebat. </p>
        <p>Has veritus civibus repudiandae no, no quis summo mea, cu nec case ipsum mazim.</p>
        <p className = "intro">Ea soleat blandit recusabo usu, in maiestatis rationibus sed. Qui ea semper nostro, per ea fierent propriae, te virtute consulatu vix.</p> 
        <p>Everti eligendi cu est. Vix ne dico maiestatis. Quas dolorem persecuti vix ea, adhuc affert similique ut mea.</p>
      </PseudoDiv>
      <hr></hr>
      <BouncingRocket> 🚀 </BouncingRocket>
    </MainContainer>
  );
}

export default StyledComponentsExample;
