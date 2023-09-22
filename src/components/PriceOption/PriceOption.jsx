import propTypes from "prop-types";
import Feature from "../feature/Feature";

const PriceOption = ({ priceOption }) => {
  const { name, price, features } = priceOption;
  return (
    <div className="bg-blue-300 rounded-2xl h-[400px] text-white py-10 flex flex-col mt-10 justify-center items-center">
      <div className="flex ">
        <p className="text-5xl font-bold">{price} </p>
        <p>/mon</p>
      </div>
      <h2 className="py-2 text-2xl">{name} </h2>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="bg-green-600 text-white w-full py-3 rounded-xl">Apply Now</button>
    </div>
  );
};
PriceOption.propTypes = {
  priceOption: propTypes.object,
  name: propTypes.string,
};
export default PriceOption;
