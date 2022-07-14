import React from 'react'

// Currification:
const background = (color) => {
  return function (Child){
    return function(props){
      return <div style={{backgroundColor:color}}>
      <Child {...props} />
    </div>
    }
  }
}

export default background