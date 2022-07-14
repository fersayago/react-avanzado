import { useContext } from 'react'
import StyleContext from '../context/StyleContext'

const HookContextConsumer = () => {
  const context = useContext(StyleContext)

  return (
    <div
      style={{
        backgroundColor: context.backgroundColor,
        textAlign: context.textAlign,
        font: context.font,
      }}
    >
      Soy un consumidor del contexto mediante Hooks
    </div>
  )
}

export default HookContextConsumer