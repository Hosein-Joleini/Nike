import { star } from "../assets/icons";

const ProductCard = ({ name, imgURL, price }) => {
  return (
    <div className="flex flex-col items-start">
      <img src={imgURL} alt={name} />
      <div className="flex items-center gap-2 mt-10 mb-4">
        <img src={star} alt="star icon" />
        <p className="text-xl text-slate-gray font-montserrat">(4.5)</p>
      </div>
      <p className="font-semibold whitespace-nowrap text-2xl font-palanquin mb-4">
        {name}
      </p>
      <p className="text-coral-red text-xl font-semibold font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
