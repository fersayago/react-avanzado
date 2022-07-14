import React from 'react'

const Red = (Child) => {
  return class extends React.Component {
    render() {
      return (
        <div style={{backgroundColor: 'red'}}>
          <Child {...this.props} />
        </div>
      )
    }
  }
}

export default Red