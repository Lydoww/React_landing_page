import React from "react";

const FormStep2 = ({ onOptionSelect }) => {
  return (
    <div className="form-style">
      <h2 className="h2-form-style">Vous êtes intéressé par ?</h2>
      <div className="flex flex-col space-y-5 mt-7">
        <input
          type="button"
          value="UN ACHAT"
          className="input-style-form cursor-pointer"
          onClick={() => onOptionSelect("Un achat")}
        />
        <input
          type="button"
          value="UN LEASING"
          className="input-style-form cursor-pointer"
          onClick={() => onOptionSelect("Un leasing")}
        />
      </div>
    </div>
  );
};

export default FormStep2;
