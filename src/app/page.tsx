'use client'
import { useEffect, useState } from "react";
import Header from "@/ui/Header/Header";
import Product from "@/components/Products/Product";
import { ThemeProvider } from 'styled-components';
import theme from "@/ui/styles/themes";
import { GlobalStyle } from "@/ui/styles/globalStyle";

interface ProductsState {
  name: string;
}

export default function Home() {
  const [productsInfo, setProductsInfo] = useState<ProductsState[]>([]);
  useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(json => setProductsInfo(json))
  }, [])

  const categoriesNames = Array.isArray(productsInfo) ? [...new Set(productsInfo.map(p => p.name))] : [];

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
      {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            <h2 className="text-2xl capitalize">{categoryName}</h2>
          </div>
        ))}
    </ThemeProvider>
  );
}