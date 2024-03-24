import React from 'react'
import ProductCard from './ProductCard';

let productData = [
    {
        img: "/quicky-2.png",
        title: "Quicky Mango",
        desc: "Energidryck med Mango smak",
        inStock: true,
        price: "24.00 kr",
    },
    {
        img: "/hoodie-1.jpg",
        title: "Quicky Logo Hoodie",
        desc: "Hoodie med Quickys logga på",
        inStock: false,
        price: "500.00 kr",
    },
    {
        img: "/quicky-2.png",
        title: "Title",
        desc: "placeholder",
        inStock: false,
        price: "00.00 kr",
    },
    {
        img: "/quicky-3.png",
        title: "Title",
        desc: "placeholder",
        inStock: false,
        price: "00.00 kr",
    },
];

const Products = () => {
  return (
    <section id="products">
        <div>
            <div className="container py-20">
                <h2 className="font-medium text-2xl pb-4">
                    <b>Produkter</b>
                </h2>
                <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20
                xl:gap-y-10">
                    {productData.map((item, index) => <ProductCard
                    key={index}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    inStock={item.inStock}
                    price={item.price}
                    />)}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products;  