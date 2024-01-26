import { useEffect, useState, useRef } from "react";
import Block from "./components/Block";

function App() {
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [toCurrency, setToCurrency] = useState('UAH')
  const [fromPrice, setFromPrice] = useState(1)
  const [toPrice, setToPrice] = useState(0)

  const ratesRef = useRef()

  
  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').then((res) => res.json()).then((data) => {
      data.unshift({cc: 'UAH', rate: 1})
      ratesRef.current = data
      onChangeFromValue(1)
    }).catch((err) => console.log('Error'))
    // eslint-disable-next-line
  }, [])

  const onChangeFromValue = (value) => {
    const currencyFrom = ratesRef.current.filter(item => item.cc === fromCurrency)[0].rate
    const currencyTo = ratesRef.current.filter(item => item.cc === toCurrency)[0].rate
    const price = (currencyFrom * value / currencyTo)
    setFromPrice(value)
    setToPrice(price)
  }
  const onChangeToValue = (value) => {
    const currencyFrom = ratesRef.current.filter(item => item.cc === fromCurrency)[0].rate
    const currencyTo = ratesRef.current.filter(item => item.cc === toCurrency)[0].rate
    const price = (currencyTo * value / currencyFrom)
    setFromPrice(price)
    setToPrice(value)
  }

  useEffect(() => {
    if (ratesRef.current) {
      onChangeFromValue(fromPrice);
    }
    // eslint-disable-next-line
  }, [fromCurrency]);
  useEffect(() => {
    if (ratesRef.current) {
      onChangeToValue(toPrice);
    }
    // eslint-disable-next-line
  }, [toCurrency]);

  return (
    <div className="App">
      <Block onChangeValue={onChangeFromValue} value={fromPrice} currency={fromCurrency} setSomeState={setFromCurrency} />
      <Block onChangeValue={onChangeToValue} value={toPrice} currency={toCurrency} setSomeState={setToCurrency} />
    </div>
  );
}

export default App;
