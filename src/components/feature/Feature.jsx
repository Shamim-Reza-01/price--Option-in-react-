import propTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";
const Feature = ({ feature }) => {
  return (
    <div>
      <h2 className="flex items-center text-center">
        <span className="text-green-500 mr-3 bg-white">
          <AiOutlineCheck></AiOutlineCheck>
        </span>
        <p>{feature}</p>{" "}
      </h2>
    </div>
  );
};
Feature.propTypes = {
  feature: propTypes.string,
};

export default Feature;
