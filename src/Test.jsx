import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Use a regular expression to validate the input
    const pattern = /^(\d{4}\/)+\d{4}$/;

    setInputValue(value);

    if (pattern.test(value)) {
      setValidationMessage("Valid input!");
    } else {
      setValidationMessage(
        "Invalid input. Please use the format: 4 digits / 4 digits / ..."
      );
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter 4 digits / 4 digits / ..."
      />
      <p>{validationMessage}</p>
    </div>
  );
}

export default App;
