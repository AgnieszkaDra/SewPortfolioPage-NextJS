// export interface AppState {
//    productsElementsCategories: object;
//    productsElements: string;
//    productsOfCategory: object;
//    linkPath: string;
// }

// export interface AppState  {
//    productsElementsCategories: [];
//    productsElements: string;
//    productsOfCategory: [];
//    linkPath: '',
//  }

 export interface AppState {
   productsElementsCategories: ProductsState;
   productsElements: ProductsState;
   productsOfCategory: ProductsState;
   productsElementsCollection: ProductsState;
   linkPath: '',
}

export interface ProductsState {
   productsElements: { [key: number]: Product };
   productsElementsCategories: object; 
   productsOfCategory: object;
}

enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200, SKIRTS = 300 }
import { CSSProperties } from 'react';

export interface HeaderProps {
   logo: string
}

export interface Image {
   name: string,
   href: string,
   image: string
}

export interface Item {
   name?: string;
   imageBackground: string;
   imagesCarousel?: string[];
   price: number;
   index?: number;
   features?: string[];
   collection?: string
}

export interface Feature {
   description?: string;
}

export interface CategoryProps {
   name: string;
   category: string,
   id: string;
   items?: Item[];
   background?: string
   collection: Collection;
   displayedCategorySettings?: {
      setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
      setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
   };
}
 
// export interface ProductItem  {
//    name: string;
//    id: number;
//    imageBackground?: string;
//    imagesCarousel?: string[];
//    price?: number;
//    index?: number;
//    features?: string[];
//    collection: string
//  }


 
 export interface Products {
   [key: number | string]: ProductItem ;
 }

 export type CollectionType = "Bluzy" | "Spodnie" | "Komplety" | "Spódnice i sukienki" | "Akcesoria" | "Dziecko" | "Kobieta" | ""
 export type CollectionMain = "Dziecko" | "CHILD" | "WOMAN" ;
 export interface ProductItem {
   id: number;
   name: string;
   children?: number[];
   imageBackground?: string;
   imagesCarousel?: string[];
   price?: number;
   collectionMain?: string;
   collectionType: CollectionType;
   features?: string[];
 }

 export interface ProductAction {
   type: string;
   payload: Products;
 }

//  export interface ProductState {
//    productsElements: Products;
//    productsElementsCategories: string[];
//  }

// export interface ProductsState {
//    productsElements: { [key: number]: Product };
//    productsElementsCategories: object; 
// }

 interface Product {
   id: number;
   name: string;
   imageBackground: string;
   imagesCarousel: string[];
   price: number;
   collectionMain: string;
   collectionType: string;
   features?: string[];
 }

export interface ProductProps {
   index?: number;
   item: Item;
   editable: boolean;
   onClick: (item: Item) => void;
   displayedProductSettings?: {
      setIsDisplayingProduct: React.Dispatch<React.SetStateAction<boolean>>;
   };
   
}

// export interface AppState {
//    productsElementsCategories: ProductsState;
//    productsElements: ProductsState;
// }
 
export interface ProductData {
   images?: string[];
}

export interface CarouselProps {
   images: Image[];
   interval?: number
}

export interface ButtonProps {
   children: React.ReactNode;
   variant?: string
   size?: string;
   type?: 'button' | 'submit' | 'reset'; 
   style?: CSSProperties;
   onClick?: () => void; 
 }

 export interface Theme {
	colors: {
	white: string;
	smokeWhite: string;
	lightGrey: string;
	darkGrey: string;
	};
	fontSize: {
	small: string;
	medium: string;
	large: string;
	extraLarge: string;
	};
	padding: {
	small: string;
	medium: string;
	large: string;
	};
	spacing: {
	small: string;
	medium: string;
	large: string;
	};
  }