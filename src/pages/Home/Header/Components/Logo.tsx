import styled from 'styled-components';

interface LogoProps {
  height?: string;
  width?: string;
}

const Logo: React.FC<LogoProps> = ({ height = '41px', width }) => {
  return (
    <LogoStyles height={height} width={width}>
      <img src="/public/assets/Header/icons/logo.svg" alt="LogoIcon" />
    </LogoStyles>
  );
};

const LogoStyles = styled.div<{ height: string; width?: string }>`
  display: flex;
  justify-content: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  img {
    height: 100%;
  }
`;

export default Logo;
