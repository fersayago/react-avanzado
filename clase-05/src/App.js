import { useState } from 'react';

import DummyComponent from './components/DummyComponent';
import Red from './hoc/red';
import RedDummyComponent from './containers/RedDummyComponent';
import GreenDummyComponent from './containers/GreenDummyComponent';
import HookContextConsumer from './components/HookContextConsumer';
import StyleContext from './context/StyleContext';
import ContextConsumer from './components/ContextConsumer';
import ContextWrapper from './containers/ContextWrapper';

const RedDummy = Red(DummyComponent)

const lightMode = {
  backgroundColor: '#fafafa',
  textAlign: 'center'
}

const darkMode = {
  backgroundColor: '#afafaf',
  textAlign: 'center'
}

function App() {

  const [mode, setMode] = useState(lightMode)

  const toggleMode = () => {
    setMode(mode === lightMode ? darkMode : lightMode)
  }

  return (
    <div className="App">
      <DummyComponent />
      <hr />
      <RedDummy />
      <hr />
      <RedDummyComponent />
      <hr />
      <GreenDummyComponent />
      <hr />

      {/* Context Provider envolviendo */}
      <StyleContext.Provider
        value={mode}
      > 
        Dark mode:
        <input type='checkbox' onChange={toggleMode} />
        {/* Consumidor del contexto mediante hooks */}
        <HookContextConsumer />
      </StyleContext.Provider>
      <hr />

      {/* Consumidor del contexto clasico */}
      <ContextConsumer />
      <hr />

      {/* Context Wrapper con Props Consumer */}
      <ContextWrapper />
    </div>
  );
}

export default App;
