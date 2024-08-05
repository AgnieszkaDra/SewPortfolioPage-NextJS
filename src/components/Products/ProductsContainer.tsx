import { useEffect, useState } from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom';
import Product from './Product.tsx';
import { useShowProduct } from '../../hooks/useShowModal.tsx';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { IoMdClose } from "react-icons/io";
import styled from 'styled-components';
import products from '../../data/products.ts';
import { useDispatch, useSelector } from 'react-redux';
import { setCategoryProducts } from '../../store/actions/actions.tsx';
import { AppState, Item } from '../../interfaces.ts'

const ProductsContainer = () => {
  
  const { categoryName } = useParams()
  console.log(categoryName)
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDisplayingProduct, setIsDisplayingProduct] = useState(false);
  const displayedProductSettings = { setIsDisplayingProduct,  isDisplayingProduct};
  const { showProduct, selectedItem, handleOpenProduct, handleCloseProduct } = useShowProduct();
  
  const ProductsWrapper = styled.div`
    color: ${({ theme }) => theme.colors.text};
    padding: 20px;
  `;

  const StyledLink = styled(RouterLink)`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textLight};
    text-decoration: none;
  `;

  const ProductsList = styled.ul<{ isLoaded: boolean }>`
      width: 100%;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 30px;
      padding: 20px 0 20px 0;
      @media screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
      }
    
      @media screen and (max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
      }
    
      @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
      }

      @keyframes slideUp {
        from {
            bottom: -100px;
        }
    
        to {
            bottom: 0;
        }
      }

      ${props =>
        props.isLoaded && `
        animation: slideUp 2s ease-in-out forwards;
      `}
  `;

  const ProductStyle = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    opacity: 1;
  `

  const ProductImage = styled.div`
    width: 100%;
    @media screen and (min-width: 767px) {
      width: 50%;
    }
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  `

  const IconCloseWrapper = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: ${({ theme }) => theme.colors.white};
    opacity: .65;
    border-radius: 100%;
    border: 9px solid transparent;
    border-radius: 100%;
    width: 36px;
    height: 36px;
    svg {
      width: 100%;
      height: 100%;
    }
  `;

  const IconClose = styled(IoMdClose)`
    color: ${({ theme }) => theme.colors.text};
    border-radius: 50%;
    height: 100%;
    width: 100%;
  `;

  const ProductTitle = styled.h1`
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
  `;

  const StyledBox = styled(Box)`
    width: 100%;
    @media screen and (min-width: 767px) {
      max-width: 560px;
    }
    @media screen and (min-width: 960px) {
      max-width: 960px;
    }
    margin: auto;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.smokeWhite};
    display: flex;
    flex-direction: column;
    @media screen and (min-width: 767px) {
      flex-direction: row;
    }
  `;

  const ProductDescription = styled.div`
    position: relative;
    padding: 30px 45px 45px;
    width: 50%;
  `;

  const ProductPrice = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textLight};
    margin: 0 10px 10px 0;
  `;

  const ProductFeaturesWrapper = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textLight};
  `;

  const ProductFeaturesList = styled.ul`
    list-style: disc;
    margin-bottom: 28px;
    padding-left: 1.3em;
    margin-left: .7em;
  `;

  const ProductFeature = styled.li`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textLight};
  `;

  const ProductOrder = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textLight};
    font-style: italic;
  `;


  useEffect(() => {
    setIsLoaded(true); 
  }, []);

  const dispatch = useDispatch()

  useEffect(() => {
    if (categoryName) {
      dispatch(setCategoryProducts(products, categoryName));
    }
  }, [dispatch,  categoryName]);

  const productsOfCategory = useSelector((state: AppState) => state.productsOfCategory);
 
  return (
    <section style={{ width: '100%', position: 'relative' }}>
      <ProductsWrapper>
        <h1 style={{ textAlign: 'center' }}>{categoryName}</h1>
        <StyledLink to={`/`}>
          <h5> Strona główna / {categoryName} </h5>
        </StyledLink>
        <ProductsList isLoaded={isLoaded}>
          {productsOfCategory &&
            Object.values(productsOfCategory).map((item: Item, index: number) => (
              <Product
                key={index}
                index={index}
                item={item}
                editable={false}
                onClick={() => handleOpenProduct(item)}
                displayedProductSettings={displayedProductSettings}
              />
            ))}
        </ProductsList>
        { showProduct && selectedItem && (
          <>        
            <Modal
              open={ showProduct }
              onClose={ handleCloseProduct }
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <ProductStyle>
                <StyledBox>
                  <ProductImage style={{ backgroundImage: `url(${ selectedItem.imageBackground })`}}>
                  </ProductImage>
                  <ProductDescription>
                    <IconCloseWrapper onClick={ handleCloseProduct }>
                      <IconClose />
                    </IconCloseWrapper>
                    <ProductTitle>
                      { selectedItem.name }
                    </ProductTitle>
                    <ProductPrice>
                      { selectedItem.price }zł
                    </ProductPrice>
                    <ProductFeaturesWrapper>
                      <ProductFeaturesList>
                        { selectedItem.features?.map((feature: string, index: number) => (
                          <ProductFeature key={index}>{feature}</ProductFeature>
                        ))}
                      </ProductFeaturesList>
                    </ProductFeaturesWrapper>
                    <ProductOrder>
                      Produkty dostępne na stronie mają nieco dłuższy czas realizacji, niż w zwykłym sklepie, ponieważ są produktami szytymi na Twoje zamówienie.
                    </ProductOrder>
                  </ProductDescription>
                </StyledBox>
              </ProductStyle>
            </Modal>
          </>
          )
        }
      </ProductsWrapper>
    </section>
  );
};

export default ProductsContainer;