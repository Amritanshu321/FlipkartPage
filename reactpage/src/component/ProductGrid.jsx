import React from "react";

const products = [
  {
    id: 1,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/h/f/t/l-mens-staylist-chex-shirt-sti-original-imah3j6nqn7gvgsz.jpeg?q=70",
    title: "Tokyo Talkies Women Fit and...",
    price: "₹636",
    originalPrice: "₹2599",
    discount: "75% off",
  },
  {
    id: 2,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/j/t/s-mens-staylist-chex-strecheble-shirt-dbex-original-imah3hj4wrbnaujh.jpeg?q=70",
    title: "Honey By Pantaloons Women...",
    price: "₹935",
    originalPrice: "₹1699",
    discount: "44% off",
  },
  {
    id: 3,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/6/d/l-tblhdful-d123-tripr-original-imagxffjrvardjfm.jpeg?q=70",
    title: "Aavarnn Women A-line White...",
    price: "₹599",
    originalPrice: "₹1750",
    discount: "65% off",
  },
  {
    id: 4,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/1/c/6/m-st1-vebnor-original-imahft9zckwegffg.jpeg?q=70",
    title: "ATHENA Women Maxi Multic...",
    price: "₹979",
    originalPrice: "₹2799",
    discount: "65% off",
  },
  {
    id: 5,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/i/s/xxl-mens-hiltop-lycra-t-shirt-sti-original-imah34rfbgyxahxu.jpeg?q=70",
    title: "Product Title 5",
    price: "₹999",
    originalPrice: "₹1999",
    discount: "50% off",
  },
  {
    id: 6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/j/v/m-st1-vebnor-original-imahftaarhyyd3jy.jpeg?q=70",
    title: "Product Title 6",
    price: "₹899",
    originalPrice: "₹1799",
    discount: "50% off",
  },
  {
    id: 1,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/h/f/t/l-mens-staylist-chex-shirt-sti-original-imah3j6nqn7gvgsz.jpeg?q=70",
    title: "Tokyo Talkies Women Fit and...",
    price: "₹636",
    originalPrice: "₹2599",
    discount: "75% off",
  },
  {
    id: 2,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/j/t/s-mens-staylist-chex-strecheble-shirt-dbex-original-imah3hj4wrbnaujh.jpeg?q=70",
    title: "Honey By Pantaloons Women...",
    price: "₹935",
    originalPrice: "₹1699",
    discount: "44% off",
  },
  {
    id: 3,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/6/d/l-tblhdful-d123-tripr-original-imagxffjrvardjfm.jpeg?q=70",
    title: "Aavarnn Women A-line White...",
    price: "₹599",
    originalPrice: "₹1750",
    discount: "65% off",
  },
  {
    id: 4,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/1/c/6/m-st1-vebnor-original-imahft9zckwegffg.jpeg?q=70",
    title: "ATHENA Women Maxi Multic...",
    price: "₹979",
    originalPrice: "₹2799",
    discount: "65% off",
  },
  {
    id: 5,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/i/s/xxl-mens-hiltop-lycra-t-shirt-sti-original-imah34rfbgyxahxu.jpeg?q=70",
    title: "Product Title 5",
    price: "₹999",
    originalPrice: "₹1999",
    discount: "50% off",
  },
  {
    id: 6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/j/v/m-st1-vebnor-original-imahftaarhyyd3jy.jpeg?q=70",
    title: "Product Title 6",
    price: "₹899",
    originalPrice: "₹1799",
    discount: "50% off",
  },
  {
    id: 1,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/h/f/t/l-mens-staylist-chex-shirt-sti-original-imah3j6nqn7gvgsz.jpeg?q=70",
    title: "Tokyo Talkies Women Fit and...",
    price: "₹636",
    originalPrice: "₹2599",
    discount: "75% off",
  },
  {
    id: 2,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/g/j/t/s-mens-staylist-chex-strecheble-shirt-dbex-original-imah3hj4wrbnaujh.jpeg?q=70",
    title: "Honey By Pantaloons Women...",
    price: "₹935",
    originalPrice: "₹1699",
    discount: "44% off",
  },
  {
    id: 3,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/q/6/d/l-tblhdful-d123-tripr-original-imagxffjrvardjfm.jpeg?q=70",
    title: "Aavarnn Women A-line White...",
    price: "₹599",
    originalPrice: "₹1750",
    discount: "65% off",
  },
  {
    id: 4,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/1/c/6/m-st1-vebnor-original-imahft9zckwegffg.jpeg?q=70",
    title: "ATHENA Women Maxi Multic...",
    price: "₹979",
    originalPrice: "₹2799",
    discount: "65% off",
  },
  {
    id: 5,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/i/i/s/xxl-mens-hiltop-lycra-t-shirt-sti-original-imah34rfbgyxahxu.jpeg?q=70",
    title: "Product Title 5",
    price: "₹999",
    originalPrice: "₹1999",
    discount: "50% off",
  },
  {
    id: 6,
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/j/v/m-st1-vebnor-original-imahftaarhyyd3jy.jpeg?q=70",
    title: "Product Title 6",
    price: "₹899",
    originalPrice: "₹1799",
    discount: "50% off",
  },
];

const ProductCard = ({ product }) => (
  <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
    <img src={product.image} alt={product.title} style={{ width: "100%" }} />
    <h3>{product.title}</h3>
    <p>
      <span style={{ fontWeight: "bold" }}>{product.price}</span> <br />
      <span style={{ textDecoration: "line-through" }}>{product.originalPrice}</span> <br />
      <span style={{ color: "green" }}>{product.discount}</span>
    </p>
  </div>
);

const ProductGrid = () => (
  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);
export default ProductGrid