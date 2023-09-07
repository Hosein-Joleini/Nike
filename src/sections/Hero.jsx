import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoe, setBigShoe] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full max-container flex gap-10 max-xl:flex-col justify-start min-h-screen"
    >
      <div className="flex flex-col max-xl:padding-l items-start justify-between pt-28 xl:w-2/5">
        <p className="text-xl text-coral-red leading-normal font-montserrat">
          Our Summer Collection
        </p>
        <h1 className="mt-10 text-8xl leading-[112px] font-palanquin font-bold max-md:text-[74px] max-md:leading-[86px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        <p className="mt-6 font-montserrat text-lg leading-8 text-slate-gray max-w-sm mb-12">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="mt-20 w-full flex gap-16 flex-wrap justify-start items-start">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-bold text-4xl font-palanquin">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center w-full bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40 relative">
        <img
          src={bigShoe}
          alt="Big Shoe"
          width="610"
          height="510"
          className="object-contain relative z-10"
        />

        <div className="flex-1 absolute -bottom-[5%] left-[10%] max-sm:left-[5%] z-10 flex gap-4 md:gap-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={`shoe-${index + 1}`}
              imageURL={shoe.thumbnail}
              imageBigShoe={bigShoe}
              currentImage={shoe.bigShoe}
              changeBigShoeImage={() => setBigShoe(shoe.bigShoe)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
