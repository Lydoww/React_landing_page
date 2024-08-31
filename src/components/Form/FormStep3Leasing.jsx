import React from "react";

const FormStep3Leasing = ({ onOptionSelect }) => {
  return (
    <div className="form-style">
      <h2 className="h2-form-style">Pour quelle durée ?</h2>
      <div className="flex flex-col space-y-5 mt-7">
        <input
          type="button"
          value="6 MOIS"
          className="input-style-form cursor-pointer"
          onClick={() => onOptionSelect("6M")}
        />
        <input
          type="button"
          value="12 MOIS"
          className="input-style-form cursor-pointer"
          onClick={() => onOptionSelect("12M")}
        />
        <input
          type="button"
          value="18 MOIS"
          className="input-style-form cursor-pointer"
          onClick={() => onOptionSelect("18M")}
        />
        <input
          type="button"
          value="24 MOIS"
          className="input-style-form cursor-pointer"
          onClick={() => onOptionSelect("24M")}
        />
      </div>
    </div>
  );
};

export default FormStep3Leasing;
