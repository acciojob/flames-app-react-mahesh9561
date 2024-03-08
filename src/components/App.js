import React, { useState } from 'react';

function FlamesCalculator() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleName1Change = (event) => {
    setName1(event.target.value);
  };

  const handleName2Change = (event) => {
    setName2(event.target.value);
  };

  const calculateRelationship = () => {
    const name1Chars = name1.split('');
    const name2Chars = name2.split('');

    // Remove common letters
    const remainingName1Chars = name1Chars.filter(char => !name2Chars.includes(char));
    const remainingName2Chars = name2Chars.filter(char => !name1Chars.includes(char));

    // Calculate sum of lengths and modulus by 6
    const totalLength = remainingName1Chars.length + remainingName2Chars.length;
    const result = totalLength % 6;

    // Set relationship status based on result
    switch (result) {
      case 1:
        setRelationship("Friends");
        break;
      case 2:
        setRelationship("Love");
        break;
      case 3:
        setRelationship("Affection");
        break;
      case 4:
        setRelationship("Marriage");
        break;
      case 5:
        setRelationship("Enemy");
        break;
      case 0:
        setRelationship("Siblings");
        break;
      default:
        setRelationship("Please enter valid input");
    }
  };

  const clearInputs = () => {
    setName1('');
    setName2('');
    setRelationship('');
  };

  return (
    <div>
      <label htmlFor="name1">Name 1:</label>
      <input
        type="text"
        id="name1"
        value={name1}
        onChange={handleName1Change}
        data-testid="input1"
      />
      <br />
      <label htmlFor="name2">Name 2:</label>
      <input
        type="text"
        id="name2"
        value={name2}
        onChange={handleName2Change}
        data-testid="input2"
      />
      <br />
      <button onClick={calculateRelationship} data-testid="calculate_relationship">Calculate Relationship</button>
      <button onClick={clearInputs} data-testid="clear">Clear</button>
      <br />
      <h3 data-testid="answer">{relationship}</h3>
    </div>
  );
}

export default FlamesCalculator;
