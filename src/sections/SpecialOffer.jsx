import Button from "../components/Button";

import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="max-container w-full flex flex-col xl:flex-row-reverse xl:items-center xl:gap-8">
      <div className="flex-1">
        <h2 className="font-bold font-palanquin text-4xl leading-[62px] mb-4">
          <span className="text-coral-red">Special Quality</span> Offer
        </h2>
        <p className="text-slate-gray text-lg font-montserrat mb-6 leading-7 max-sm:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="text-slate-gray text-lg  font-montserrat leading-7 mb-10 max-sm:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex items-center gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button label="Learn more" background={true} />
        </div>
      </div>
      <div className="flex-1 mt-10 max-xl:self-center">
        <img src={offer} alt="Offer" />
      </div>
    </section>
  );
};

export default SpecialOffer;
