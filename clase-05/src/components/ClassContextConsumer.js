import React from 'react'
import StyleContext from '../context/StyleContext';

class ClassContextConsumer extends React.Component {
  render() {
    return(
      <div
        style={{
          backgroundColor: this.context.backgroundColor,
          font: this.context.font,
          textAlign: this.context.textAlign
        }}
      >
        Soy un consumidor del contexto en un class component
      </div>
    )
  }
}

ClassContextConsumer.contextType = StyleContext;

export default ClassContextConsumer