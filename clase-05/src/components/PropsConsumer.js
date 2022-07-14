import React from 'react'

// No sabe nada de context API, consume del contexto de un componente

const PropsConsumer = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.style.backgroundColor,
        font: props.style.font,
        textAlign: props.style.textAlign
      }}
    >
      Soy un consumidor del contexto indirectamente por props
    </div>
  )
}

export default PropsConsumer