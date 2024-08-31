import React, { useState } from "react";

const FormStep1 = ({ onOptionSelect }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionSelect(option);
  };

  return (
    <div className="form-style">
      <h2 className="h2-form-style">
        Quel est le type de modèle que vous souhaitez tester ?
      </h2>
      <div className="flex flex-col space-y-5 mt-7">
        {["COMPACTE", "SUV", "ELECTRIQUE & HYBRIDE", "SPORTIVE"].map(
          (option) => (
            <input
              key={option}
              type="button"
              value={option}
              className={`input-style-form ${
                selectedOption === option
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-200 text-gray-800 border-gray-300"
              } cursor-pointer`}
              onClick={() => handleOptionClick(option)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FormStep1;
