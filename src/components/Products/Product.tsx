import React, { useState }  from 'react';
import { ProductProps } from '@/interfaces';
import { IoIosResize } from "react-icons/io";
import styled from 'styled-components';

const Product: React.FC<ProductProps> = ({ index, item, onClick }) => {
const [isHovered, setIsHovered] = useState(false);

const IconResizeWrapper = styled.div<{ isHovered: boolean }>`
  display: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.veryLightGrey};
  &:hover {
    background-color: ${({ theme }) => theme.colors.smokeWhite};
  } 
  
  ${props =>
    props.isHovered && `
    display: flex;
    position: absolute;
    top: 5%;
    right: 5%;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 65%;
        height: 65%;
      }  
  `}
`;

const ProductWrapper = styled.li`
  height: 400px;
  display: grid;
  grid-template-rows: 320px 40px 40px;

  & > * {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
  }

  &:hover {
      transform: scale(1.02);
  }
`;

const CaptionWrapper = styled.div`
  padding-top: 1rem;
`;

return (
  <ProductWrapper 
    key={index}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={() => onClick(item)}
  >
    <figure>
      <IconResizeWrapper isHovered={isHovered}>
        <IoIosResize />
      </IconResizeWrapper>
      {/* <img src={item.imageBackground} alt={`Image ${index}`} />  */}
    </figure>
    <CaptionWrapper>
      <h3>{item.name}</h3>
      <span>{item.price}zł </span>
    </CaptionWrapper>
  </ProductWrapper>
);
};

export default Product;