import { useEffect, useState } from 'react';
import './App.css';
import InputComponent from "./InputComponent"
import { useSelector } from 'react-redux';
import CheckBoxComponent from './checkboxComponent';

function App() {
  const [isRequired, setIsRequired] = useState(false);
  const data = useSelector((state) => state.storedData.value);
  const [value, setValue] = useState(data);

  useEffect(() => {
    setValue(data);
  }, [data]);

  const numbers = [];

  for (let a = 1; a <= value; a++) {
    numbers.push(a);
  }

  return (
    <>
      <InputComponent />
      <CheckBoxComponent setIsRequired={setIsRequired} isRequired={isRequired} />
      {
        <ul style={{ width: "200px", margin: "auto", fontSize: "25px", fontWeight: "bold" }}>
          {
            numbers.map((number, index) => {
              let backgroundColor = 'white';

              if (number % 15 === 0 && isRequired) {
                backgroundColor = 'blue';
              } else if (number % 15 === 0 && !isRequired) {
                backgroundColor = 'yellow';
              } else if (number % 3 === 0 && number % 5 !== 0) {
                backgroundColor = 'green';
              } else if (number % 5 === 0 && number % 3 !== 0) {
                backgroundColor = 'red'
              } else {
                backgroundColor = "white"
              }

              return (
                <li key={index} style={{ backgroundColor: backgroundColor }}>
                  {
                    backgroundColor === 'blue' && (<div style={{ color: "white" }}>FIZZ_BUZZ</div>)
                  }

                  {
                    backgroundColor === 'yellow' && (<div >BUZZ_FIZZ</div>)
                  }

                  {
                    backgroundColor === 'green' && (<div>FIZZ</div>)
                  }

                  {
                    backgroundColor === 'red' && (<div>BUZZ</div>)
                  }

                  {
                    backgroundColor === "white" && (<div>{number}</div>)
                  }
                </li>
              );
            })}
        </ul>
      }
    </>
  );
}

export default App;
