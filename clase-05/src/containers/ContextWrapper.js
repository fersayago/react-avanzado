import React from 'react'
import PropsConsumer from '../components/PropsConsumer'
import StyleContext from '../context/StyleContext'

const ContextWrapper = () => {

  // Convierte el contexto en unas props para que
  // el componente jamas se entere que trabaja
  // con context API

  return (
    <StyleContext.Consumer>
      {
        (context) => (
          <PropsConsumer style={context}/>
        )
      }
    </StyleContext.Consumer>
  )
}

export default ContextWrapper