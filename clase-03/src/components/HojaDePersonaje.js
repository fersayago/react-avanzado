import { Card, CardHeader, Typography, CardContent } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useSelector } from 'react-redux';


const HojaDePersonaje = () => {
  
  //mapStateToProps
  var heroe = useSelector( store => store )

  return (
    <Card>
      <CardActionArea>
      <CardHeader title={heroe.name} />
      <CardContent>
        <Typography>{heroe.race} - {heroe.class}</Typography>
        <Typography variant='body1'>LV : {heroe.level}</Typography>
        <Typography variant='body1'>HP : {heroe.hp}</Typography>
        <Typography variant='body1'>XP : {heroe.xp}</Typography>
      </CardContent>
    </CardActionArea>
    </Card>
  )
}

export default HojaDePersonaje;