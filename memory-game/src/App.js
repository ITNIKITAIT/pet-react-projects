import { useState, useEffect } from "react";
import Game from "./components/Game/Game";
import Menu from "./components/Menu/Menu";
import Result from './components/Result/Result';


function App() {
  const [tab, setTab] = useState('menu')
  const [difficulty, setDifficulty] = useState('casual')
  const [modal, setModal] = useState(false)

  useEffect(() => {
      if(modal) document.body.style.overflow = 'hidden';
      return () => {
          document.body.style.overflow = '';
      };
  }, [modal]);

  return (
    <>
      {tab === 'menu' && <Menu setTab={setTab} setDifficulty={setDifficulty} />}
      {tab === 'game' && <Game modal={modal} setModal={setModal} setTab={setTab} difficulty={difficulty} />}
      {modal && <Result setTab={setTab} setModal={setModal}/>}
    </>
  );
}

export default App;
