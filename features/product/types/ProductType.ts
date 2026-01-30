export interface ProductDimension {
  width: number;
  height: number;
  depth: number;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;

  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  minimumOrderQuantity: number;
  weight: number;

  sku: string;
  brand: string;
  category: string;
  tags: string[];

  images: string[];
  thumbnail: string;

  availabilityStatus: string;
  shippingInformation: string;
  returnPolicy: string;
  warrantyInformation: string;

  dimensions: ProductDimension;
  meta: ProductMeta;

  reviews: unknown[];
}
