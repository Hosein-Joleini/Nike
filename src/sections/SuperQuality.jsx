import Button from "../components/Button";

import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container w-full flex max-lg:flex-col gap-12 items-center"
    >
      <div className="flex-1">
        <h2 className="font-bold font-palanquin text-4xl leading-[62px] mb-4">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className="text-slate-gray text-lg font-montserrat mb-6 leading-7 max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="text-slate-gray text-lg  font-montserrat leading-7 mb-10 max-w-lg">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <Button label="View details" />
      </div>
      <div className="flex-1">
        <img src={shoe8} alt="Nike Shoe" width="570" height="522" />
      </div>
    </section>
  );
};

export default SuperQuality;
