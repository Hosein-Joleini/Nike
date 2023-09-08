import ProductCard from "../components/ProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <section
      className="max-container w-full flex flex-col items-start"
      id="products"
    >
      <h2 className="font-bold font-palanquin text-4xl mb-6 leading-[62px]">
        Our <span className="text-coral-red">Popular</span> Products
      </h2>
      <p className="text-slate-gray font-montserrat mb-16 max-w-lg leading-normal">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-16 gap-x-8">
        {products.map((item) => (
          <ProductCard
            key={item.name}
            name={item.name}
            price={item.price}
            imgURL={item.imgURL}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
