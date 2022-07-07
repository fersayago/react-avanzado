import { ButtonGroup, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import Actions from '../actions/actions';

const BotoneraPelea = (props) => {

  //mapDsipatchToProps
  var dispatch = useDispatch()

  const handleExperience = () => {
    dispatch({
      type: Actions.GAIN_XP,
      payload: Math.round(Math.random() * 100)
    })
  }

  const handleDamage = () => {
    dispatch({
      type: Actions.TAKE_DAMAGE,
      payload: Math.round(Math.random() * 10)
    })
  }

  return(
    <ButtonGroup>
      <Button
        variant ='contained'
        onClick={handleExperience}
      >
          Ganar experiencia
        </Button>
      <Button
        variant ='outlined'
        onClick={handleDamage}
      >
        Recibir daño
      </Button>
    </ButtonGroup>
  )
}

export default BotoneraPelea;