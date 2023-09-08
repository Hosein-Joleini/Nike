import { star } from "../assets/icons";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-conteiner w-full flex flex-col gap-28">
      <div className="text-center">
        <h2 className="font-bold font-palanquin text-4xl mb-6 leading-[62px]">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h2>
        <p className="info-text">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div className="flex max-lg:flex-col max-lg:gap-16">
        {reviews.map((item) => (
          <div
            key={item.customerName}
            className="flex-1 flex flex-col items-center"
          >
            <img
              src={item.imgURL}
              alt="Customer Photo"
              className="w-[120px] h-[120px] rounded-full"
            />
            <p className="info-text text-center max-w-sm mt-6 mb-3">
              {item.feedback}
            </p>
            <div className="flex gap-2 items-center justify-center">
              <img src={star} alt="Star Icon" />
              <p className="text-slate-gray font-montserrat text-xl">
                ({item.rating})
              </p>
            </div>
            <p className="font-bold font-palanquin text-3xl">
              {item.customerName}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
