import React, { useState } from 'react';

function calculateRelationship(name1, name2) {
    const name1Set = new Set(name1.split(''));
    const name2Set = new Set(name2.split(''));

    // Remove common letters
    const remaining1 = name1.split('').filter(char => !name2Set.has(char)).join('');
    const remaining2 = name2.split('').filter(char => !name1Set.has(char)).join('');

    // Calculate the sum of the lengths and take the modulus by 6
    const result = (remaining1.length + remaining2.length) % 6;

    // Define the relationship status based on the result
    switch (result) {
        case 1:
            return "Friends";
        case 2:
            return "Love";
        case 3:
            return "Affection";
        case 4:
            return "Marriage";
        case 5:
            return "Enemy";
        case 0:
            return "Siblings";
        default:
            return "Please Enter valid input";
    }
}

function App() {
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [relationship, setRelationship] = useState('');

    const handleCalculate = () => {
        setRelationship(calculateRelationship(name1, name2));
    };

    const handleClear = () => {
        setName1('');
        setName2('');
        setRelationship('');
    };

    return (
        <div>
            <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                data-testid="input1"
                placeholder="Enter name 1"
            />
            <br />
            <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                data-testid="input2"
                placeholder="Enter name 2"
            />
            <br />
            <button onClick={handleCalculate} data-testid="calculate_relationship">
                Calculate Relationship
            </button>
            <button onClick={handleClear} data-testid="clear">
                Clear
            </button>
            <h3 data-testid="answer">{relationship}</h3>
        </div>
    );
}

export default App;
