import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-contianer w-full flex max-lg:flex-col lg:gap-12 lg:items-center gap-4 lg:justify-center"
    >
      <h2 className="flex-1 font-bold font-palanquin text-4xl mb-6 leading-[62px]">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h2>
      <form className="flex-1 flex max-sm:flex-col max-sm:gap-4 relative">
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <Button label="Sign Up" className="sm:absolute sm:right-2 top-1" />
      </form>
    </section>
  );
};

export default Subscribe;
