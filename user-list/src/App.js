import { useState } from "react";
import Users from "./components/users";
import Success from "./components/success";

function App() {
  const [isLoaing, setLoading] = useState(true)
  const [success, setSuccess] = useState(false)
  const [count, setCount] = useState(0)

  return (
    <>
      {success ? <Success count={count} /> : 
      (<Users setCount={setCount} count={count} setSuccess={setSuccess} isLoading={isLoaing} setLoading={setLoading} />)
      }
    </>
  );
}

export default App;
