import axios from 'axios';
import React, { useEffect, useState } from 'react'


// En este componente se maneja toda la logica y funcionamiento
const Get = (props) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get(props.url)
      .then((resp) => {
        setState(resp.data);
      })
  }, []);

  if (state){
    return props.children(state);
  }
  
  return (
    <>
    </>
  )
}

export default Get