import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 50,
      features: [
        "All Basic Membership features",
        "Access to group fitness classes",
        "Personal training session (1/month)",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 80,
      features: [
        "All Standard Membership features",
        "Unlimited group fitness classes",
        "Personal training session (2/month)",
      ],
    },
    {
      id: 4,
      name: "Elite Membership",
      price: 120,
      features: [
        "All Premium Membership features",
        "Access to spa and sauna",
        "Towel service","All Basic Membership features",
        "Access to group fitness classes",
        "Personal training session (1/month)",
      ],
    },
  ];

  return (
    <div className=" grid md:grid-cols-3 gap-5">
      {priceOptions.map((priceOption) => (
        <PriceOption
          key={priceOption.id}
          priceOption={priceOption}
        ></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
