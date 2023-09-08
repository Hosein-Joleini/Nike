import ServiceCard from "../components/ServiceCard";

import { services } from "../constants";

const Services = () => {
  return (
    <section className="max-container bg-white-400">
      <div className="w-full flex gap-8 max-xl:flex-wrap bg-white">
        {services.map((item) => (
          <ServiceCard
            key={item.label}
            imgURL={item.imgURL}
            label={item.label}
            subtext={item.subtext}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
