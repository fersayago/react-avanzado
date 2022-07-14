import React, { useEffect, useState} from 'react'
import axios from 'axios';


// lo hacemos con currification
export default function httpGet(url){
  return function (mapResponseToProps){
    return function (Child){
      return function (props){
        const [resp, setResp] = useState(null);

        useEffect(() => {
          axios.get(url)
            .then((resp) => {
              setResp(mapResponseToProps(resp.data));
            })
        }, [])

        if (resp){
          return <Child {...props} {...resp} />
        }

        return (<></>);
      }
    }
  }
}