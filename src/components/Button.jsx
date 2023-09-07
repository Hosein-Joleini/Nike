const Button = ({ label, iconURL }) => {
  return (
    <button
      type="button"
      className="flex items-center bg-coral-red gap-4 py-4 px-8 rounded-full text-white-400 font-montserrat text-lg"
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" />}
    </button>
  );
};

export default Button;
