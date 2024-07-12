import React from 'react';
import styled, { css } from 'styled-components';
import Logo from './Header/Components/Logo';
import { SearchInput } from './Header/Components/SearchInput';
import { Button } from '../../components/CustomButton/CustomButton';
import Divider from '../../components/Divider/Divider';
import Typography from '../../Typography';
import { footerData, socialLinks } from '../../constants/footer';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <TopSection>
        <Logo />
        <WrapperInputBtn>
          <SearchInput
            srcImg="/src/assets/envelope.svg"
            altImg="envelope"
            placeholder="Подписаться на рассылку"
            wrapperSearchInputStyles={WrapperSearchInputStyles}
          />
          <SubscribeButton>Подписаться</SubscribeButton>
        </WrapperInputBtn>
      </TopSection>
      <Divider />
      <LinksSection>
        {footerData.map((column, index) => (
          <Column key={index}>
            <ColumnTitle variant="h6">{column.title}</ColumnTitle>
            <ColumnList>
              {column.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <ColumnItem to="#">{item}</ColumnItem>
                </li>
              ))}
            </ColumnList>
          </Column>
        ))}
        <ColumnSocial>
          <WrapperContact>
            <ColumnTitle variant="h6">Контакты</ColumnTitle>
            <AppStoreIcons>
              <NavLink to="#">
                <img src="/src/assets/buttonApp.svg" alt="App Store" />
              </NavLink>
              <NavLink to="#">
                <img src="/src/assets/buttonGoogle.svg" alt="Google Play" />
              </NavLink>
            </AppStoreIcons>
          </WrapperContact>
          <WrapperSocial>
            <ColumnTitle variant="h6">Присоединиться к нам</ColumnTitle>
            <SocialSection>
              {socialLinks.map((link, ind) => (
                <NavLink to={link.href} key={ind}>
                  <img src={link.src} alt={link.alt} />
                </NavLink>
              ))}
            </SocialSection>
          </WrapperSocial>
        </ColumnSocial>
      </LinksSection>
      <Divider />
      <FooterBottom>
        <Typography variant="bodyS">Тестовая компания @ 2023. Все права защищены.</Typography>
        <BottomLinks>
          <NavLink to="/medicine">Медицина</NavLink>
          <NavLink to="/science">Наука</NavLink>
          <NavLink to="/innovation">Инновации</NavLink>
        </BottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #67c3f3 0%, #5a98f2 100%);
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.fonts.primary};
  padding: 48px 80px 48px 80px;
  gap: 48px;

  @media (max-width: 1100px) {
    padding: 48px 40px 48px 40px;
  }
  @media (max-width: 900px) {
    padding: 48px 20px 48px 20px;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
`;

const WrapperInputBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  gap: 16px;
  @media (max-width: 700px) {
    justify-content: center;
    gap: 8px;
  }
`;

const WrapperSearchInputStyles = css`
  background-color: ${({ theme }) => theme.colors.coolGray10};
  flex: none;
  min-width: 261px;
  @media (max-width: 500px) {
    min-width: auto;
    width: 170px;
  }
`;

const SubscribeButton = styled(Button)`
  width: 160px;
`;

const LinksSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 48px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }
`;

const ColumnTitle = styled(Typography)`
  margin: 12px 0px 12px 0px;
  white-space: nowrap;
`;

const ColumnList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 600px) {
    width: 100%;
    align-items: center;
  }
`;

const ColumnItem = styled(NavLink)`
  cursor: pointer;
  ${({ theme }) => theme.typography.menuTabs}
`;

const ColumnSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;

  @media (max-width: 800px) {
    flex: none;
    align-items: center;
  }
`;

const WrapperContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

const WrapperSocial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SocialSection = styled.div`
  display: flex;
  gap: 16px;
`;

const AppStoreIcons = styled.div`
  display: flex;
  gap: 8px;

  a {
    cursor: pointer;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 48px;
  @media (max-width: 800px) {
    gap: 24px;
    justify-content: center;
  }
`;

const BottomLinks = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  gap: 16px;

  a {
    ${({ theme }) => theme.typography.menuTabs}
    padding: 12px 8px 12px 8px;
  }

  @media (max-width: 800px) {
    justify-content: center;
  }
`;
