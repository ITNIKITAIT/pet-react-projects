import { useState } from "react";
import Game from "./components/game";
import { questions } from "./components/questions-data";
import Result from './components/result'

function App() {
  const [step, setStep] = useState(0)
  const [total, setTotal] = useState(0)

  const onClickVar = (index) => {
    console.log(step, index)
    setStep(step + 1)
    if (index === questions[step].correct) setTotal(total + 1)
  }

  return (
    <>
    {
      step !== questions.length ? <Game step={step} question={questions[step]} onClickVar={onClickVar} /> :
      <Result setStep={setStep} total={total} setTotal={setTotal} />
    }
    </>
  );
}

export default App;
