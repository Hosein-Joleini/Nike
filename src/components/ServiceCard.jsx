const ServiceCard = ({ label, imgURL, subtext }) => {
  return (
    <div className="flex-1 flex flex-col justify-start p-10 shadow-3xl rounded-xl">
      <div className="bg-coral-red rounded-full w-10 h-10 flex items-center justify-center mb-4">
        <img src={imgURL} alt="Service Icon" />
      </div>
      <h3 className="text-3xl leading-9 font-palanquin font-bold whitespace-nowrap mb-6">
        {label}
      </h3>
      <p className="leading-7 text-lg font-montserrat text-slate-gray pr-10">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
