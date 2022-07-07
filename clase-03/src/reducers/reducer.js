import Actions from  '../actions/actions'

export default function reducer (state, action) {
  let newState = {...state};

  switch (action.type) {
    case Actions.GAIN_XP:
      // si esta vivo
      if (newState.alive) {
        newState.xp += action.payload;
        // cada 1000 xp sube de nivel
        newState.level = Math.floor(newState.xp / 1000) + 1;
      }
      break;
    case Actions.TAKE_DAMAGE:
      // evalua que la vida no baje de 0 y le asigna el nuevo estado
      newState.hp = Math.max(newState.hp-action.payload, 0);
      // mata al personaje si su vida llega a 0
      (newState.hp <= 0) && (newState.alive = false);
      break;
    case Actions.HEAL:
      newState.hp =+ action.payload;
      break;
    default:
      break;
  }

  return newState;
}