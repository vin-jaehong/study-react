import React, { useState } from "react";

const ConfirmButton = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    setIsConfirmed(!isConfirmed);
  };

  return (
    <div>
      <button onClick={handleConfirm} disabled={isConfirmed}>
        {isConfirmed ? "확인됨" : "확인하기"}
      </button>
    </div>
  );
};

export default ConfirmButton;
