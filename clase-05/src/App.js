import { useState } from 'react';

import DummyComponent from './components/DummyComponent';
import Red from './hoc/red';
import RedDummyComponent from './containers/RedDummyComponent';
import GreenDummyComponent from './containers/GreenDummyComponent';
import HookContextConsumer from './components/HookContextConsumer';
import StyleContext from './context/StyleContext';
import ContextConsumer from './components/ContextConsumer';
import ContextWrapper from './containers/ContextWrapper';
import ClassContextConsumer from './components/ClassContextConsumer';
import Fetch from './renderprops/Fetch';
import Get from './childrenprops/Get';
import RickAndMortyQuote from './containers/RickAndMortyQuote';

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
      <hr />

      {/* Class Context Consumer */}
      <ClassContextConsumer />
      <hr />

      {/* En el render se maneja toda la logica de visaulización */}
      <Fetch 
        url='https://rickandmortyapi.com/api/character/1'
        render = {(resp) =>(
          <div>
            <blockquote>
              {resp.name}
              <footer>{resp.species}</footer>
            </blockquote>
          </div>
        )}
      />

      <Get url='https://rickandmortyapi.com/api/character/2'>
      {
        (resp) =>(
          <div>
            <blockquote>
              {resp.name}
              <footer>{resp.species}</footer>
            </blockquote>
          </div>
        )
      }
      </Get>
      <hr />

      {/* HttpGet con currification de URL, map response to Props y Quote */}
      <RickAndMortyQuote />
    </div>
  );
}

export default App;
