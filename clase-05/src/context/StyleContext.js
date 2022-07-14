import React from 'react';

export const defaultStyles = {
  backgroundColor: 'peachpuff',
  textAlign: 'center',
  font: 'sans-serif',
}

// Es parecido al createStore
export default React.createContext(defaultStyles);