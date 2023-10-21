import React, { useState } from 'react';
import './Calculator.css'
import  Container  from '@mui/material/Container';
import { Box } from '@mui/system'

const Calculator = () => {
  const [number, setNumber] = useState(0)
  const [oldNumber, setOldNumber] = useState(0)
  const [operator, setOperator] = useState("")
  const [history, setHistory] = useState("=")

  const inputNumber = (e) => {
    const input = e.target.value
    number === 0 ? setNumber(input) : setNumber(number + input)
  }

  const clear = () => {
    setNumber(0)
  }

  const porcentage = () => {
    setNumber(number / 100)
  }

  const changeSign = () => {
    if (number > 0) {
      setNumber(-number)
    } else {
      setNumber(Math.abs(number))
    }
  }

  const operatorHandle = (e) => {
    const operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNumber(number)
    setNumber(0)
  }

  const calculate = () => {
    if (operator === "/") {
      setNumber(oldNumber / number)
      setHistory(number)
      console.log(history);
    }
    if (operator === "X") {
      setNumber(oldNumber * number)
    }
    if (operator === "+") {
      setNumber(parseFloat(oldNumber) + parseFloat(number))
    }if (operator === "-") {
      setNumber(oldNumber - number)
    }
    
  }

  return (
    <div>
      <Box m={5} />
        <Container maxWidth="xs">
          <div className='wrapper'>
            <Box m={12} />
            <p className='history'>{`${number} ${operator} ${history}`}</p>     
            <h1 className='result'>{number}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={changeSign}>+/-</button>
            <button onClick={porcentage}>%</button>
            <button className='orange' onClick={operatorHandle} value={"/"}>/</button>
            <button className='gray' onClick={inputNumber} value={7}>7</button>
            <button className='gray' onClick={inputNumber} value={8}>8</button>
            <button className='gray' onClick={inputNumber} value={9}>9</button>
            <button className='orange' onClick={operatorHandle} value={"X"}>X</button>
            <button className='gray' onClick={inputNumber} value={4}>4</button>
            <button className='gray' onClick={inputNumber} value={5}>5</button>
            <button className='gray' onClick={inputNumber} value={6}>6</button>
            <button className='orange' onClick={operatorHandle} value={"-"}>-</button>
            <button className='gray' onClick={inputNumber} value={1}>1</button>
            <button className='gray' onClick={inputNumber} value={2}>2</button>
            <button className='gray' onClick={inputNumber} value={3}>3</button>
            <button className='orange' onClick={operatorHandle} value={"+"}>+</button>
            <button className='gray' onClick={inputNumber} value={0}>0</button>
            <button className='gray' onClick={inputNumber} value={"."}>,</button>
            <button className='equals orange' onClick={calculate}>=</button>
          </div>
        </Container>
    </div>
  );
}

export default Calculator;
