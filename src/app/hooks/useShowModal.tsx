import { useState } from "react";

 interface Item {
  title?: string;
  image?: string; 
  price?: number;
}

export const useShowProduct = () => {
 
  const [showProduct, setShowProduct] = useState(false);
  const [selectedItem , setSelectedItem] = useState(Object); 


  const handleOpenProduct = (item: Item) => {
    setSelectedItem(item); 
    setShowProduct(true);
  };

  const handleCloseProduct = () => {
    setSelectedItem(selectedItem); 
    setShowProduct(false);
  };

  return { showProduct, selectedItem, handleOpenProduct, handleCloseProduct };
};