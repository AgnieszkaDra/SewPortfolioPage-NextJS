'use client'

import Navigation from '../../ui/Navigation/Navigation';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  height: 10vh;
  position: relative;
`;

const Header  = () => {
  return (
    <HeaderWrapper>
      <Navigation />
    </HeaderWrapper>
  );
};

export default Header;