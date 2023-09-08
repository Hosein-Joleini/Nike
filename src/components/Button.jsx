const Button = ({ label, iconURL, background }) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-4 py-4 px-8 rounded-full font-montserrat text-lg ${
        background
          ? "bg-white-400 text-slate-gray border border-slate-gray"
          : "text-white-400 bg-coral-red border border-coral-red"
      }`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" />}
    </button>
  );
};

export default Button;
