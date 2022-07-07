import { createStore } from 'redux';

let heroeData = {
  name: "Tony",
  race: "human",
  class: "druid",
  hp: 100,
  level: 1,
  xp: 0,
  stats: []
}

export default createStore ((s,a) => (s), heroeData);