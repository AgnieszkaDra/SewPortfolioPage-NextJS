import Link from 'next/link';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useToggleNavbar } from '@/hooks/useNavbar';
import styled from 'styled-components';

// Styled-components usage
const NavigationWrapper = styled.nav<{ isnavigation: boolean }>`
  ${({ isnavigation, theme }) =>
    isnavigation ? `
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: ${theme.colors.smokeWhite};
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row; 
    @media screen and (max-width: 575px) {
      flex-direction: column;
    }
  ` : `
    display: none;
  `}
`;

const SidePanel = styled.div`
  padding: 20px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  align-items: start;
`;

const IconCloseWrapper = styled.div<{ isnavigation: boolean }>`
  background-color: ${({ theme }) => theme.colors.veryLightGrey};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  svg {
    width: 100%;
    height: 100%;
  }
  ${({ isnavigation }) =>
    isnavigation ? `
    display: flex;
  ` : `
    display: none;
  `}
`;

const IconClose = styled(IoMdClose)`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.smokeWhite};
  padding: 2px;
  height: 100%;
`;

const MenuElement = styled.li`
  text-transform: uppercase;
  letter-spacing: .1em;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.text}; 
    transition: width .25s;
  }
  &:hover::after {
    width: 100%;
  } 
`;

const HamburgerWrapper = styled.div<{ isnavigation: boolean }>`
  ${({ isnavigation }) =>
    isnavigation ? `
    display: none;
  ` : `
    display: flex;
  `}
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  svg {
    width: 100%;
    height: 100%;
    z-index: 3;
  }
`;

export const Navigation = () => {
  const { navbarOpen, toggleNavbar } = useToggleNavbar();

  return (
    <>
      <NavigationWrapper isnavigation={navbarOpen} onClick={toggleNavbar}>
        <SidePanel>
          <IconCloseWrapper isnavigation={navbarOpen} onClick={toggleNavbar}>
            <IconClose />
          </IconCloseWrapper>
        </SidePanel>
        <div style={{ padding: '50px', width: '95%', marginLeft: 'auto' }}>
          <ul style={{ width: '25%' }}>
            <MenuElement>
              <StyledLink href={'/'}>Strona główna</StyledLink>
            </MenuElement>
            <MenuElement>
              <StyledLink href={'/category/Dziecko'}>Strefa dziecka</StyledLink> 
            </MenuElement>
            <MenuElement>
              <StyledLink href={'/category/Kobieta'}>Strefa kobiet</StyledLink>
            </MenuElement>
          </ul>
        </div>
      </NavigationWrapper>
      <HamburgerWrapper isnavigation={navbarOpen} onClick={toggleNavbar}>
        <GiHamburgerMenu />
      </HamburgerWrapper>
    </>
  );
};

export default Navigation;