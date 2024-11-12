import Input from './components/Input';
import Button from './components/Button';

import { Container, Content, Row } from './styles';
import { useState } from 'react';


const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  };

  const   
 handleNumberClick = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleOperatorClick = (op) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    }
    setOperation(op);
  };

  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      let result;
      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);

          break;
        case 'x':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        case   
 '/':
          result = Number(firstNumber) / Number(currentNumber);
          break;
        default:
          break;
      }
      setCurrentNumber(String(result)); 

      setFirstNumber('0');
      setOperation('');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperatorClick('x')} />
          <Button label="/" onClick={() => handleOperatorClick('/')} />
          <Button label="C" onClick={handleClear} />
          <Button label="." />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleNumberClick('7')} />
          <Button label="8" onClick={() => handleNumberClick('8')} />
          <Button label="9" onClick={() => handleNumberClick('9')} />
          <Button label="-" onClick={() => handleOperatorClick('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleNumberClick('4')} />
          <Button label="5" onClick={() => handleNumberClick('5')} />
          <Button label="6" onClick={() => handleNumberClick('6')} />
          <Button label="+" onClick={() => handleOperatorClick('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleNumberClick('1')} />
          <Button label="2" onClick={() => handleNumberClick('2')} />
          <Button label="3" onClick={() => handleNumberClick('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}


export default App;
