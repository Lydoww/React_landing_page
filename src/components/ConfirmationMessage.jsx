import React from "react";

const ConfirmationMessage = () => {
  return (
    <>
      <h2 className="confirmation-title">
        Votre réservation a bien été prise en compte. Vous serez contacté dans
        <span className="underline-container">
          <span className="underline-custom">un délai de 48H</span>
        </span>
        .
      </h2>
      <p className="confirmation-footer">
        L’équipe Alfa Romeo, vous remercie.
      </p>
    </>
  );
};

export default ConfirmationMessage;
