import { useCallback, useState } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function UseCallback() {
  let [age, setAge] = useState(25);
  let [salary, setSalary] = useState(250000);

  let incrementAge = useCallback(() => {
    setAge(age + 1);
  },[age]);

  let incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  },[salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>

    </div>
  );
}

export default UseCallback;
