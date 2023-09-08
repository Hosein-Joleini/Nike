const Button = ({ label, iconURL, background, className }) => {
  return (
    <button
      type="button"
      className={`flex items-center justify-center gap-4 py-4 px-8 rounded-full font-montserrat text-lg ${
        background
          ? "bg-white-400 text-slate-gray border border-slate-gray"
          : "text-white bg-coral-red border border-coral-red"
      } ${className}`}
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" />}
    </button>
  );
};

export default Button;
