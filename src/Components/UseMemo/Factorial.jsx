import { useState, useMemo } from "react";

function Factorial() {
  const [number, setNumber] = useState(0);

  const handleInputChange = (e) => {
    setNumber(parseInt(e.target.value, 10));
  };

  const calculateFactorial = (num) => {
    console.log(`Calculating factorial for ${num}`);
    if (num == 0 || num == 1) {
      return 1;
    }
    return num * calculateFactorial(num - 1);
  };

  const factorial = useMemo(() => {
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <h2>Factorial Calculator</h2>
      <label>
        Enter a number:
        <input type="number" value={number} onChange={handleInputChange} />
      </label>
      <p>
        Factorial of {number} is: <strong>{factorial}</strong>
      </p>
    </div>
  );
}

export default Factorial;
