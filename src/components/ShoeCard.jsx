const ShoeCard = ({
  imageURL,
  imageBigShoe,
  currentImage,
  changeBigShoeImage,
}) => {
  return (
    <div
      onClick={changeBigShoeImage}
      className={`flex items-center justify-center bg-card bg-center bg-cover sm:w-40 sm:h-40  rounded-xl max-sm:p-3 cursor-pointer ${
        currentImage === imageBigShoe
          ? "border-2 border-coral-red"
          : "border-2 border-transparent"
      } transition`}
    >
      <img
        src={imageURL}
        alt="Big Show Thumbnail"
        width="127"
        height="103"
        className="object-contain"
      />
    </div>
  );
};

export default ShoeCard;
