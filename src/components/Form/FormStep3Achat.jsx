import React from "react";

const FormStep3Achat = ({ onOptionSelect }) => {
  return (
    <div className="form-style">
      <h1 className="h2-form-style">Pour quel type de véhicule ?</h1>
      <div className="flex flex-col space-y-5 mt-7">
        <input
          type="button"
          value="NEUF"
          className="input-style-form cursor-pointer"
          onClick={() => onOptionSelect("Neuf")}
        />
        <input
          type="button"
          value="OCCASION"
          className="input-style-form cursor-pointer"
          onClick={() => onOptionSelect("Occasion")}
        />
      </div>
    </div>
  );
};

export default FormStep3Achat;
