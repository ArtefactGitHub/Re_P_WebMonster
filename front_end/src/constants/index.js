export const CREATE_MONSTER_PARAMS_INITIAL_STATE = {
  hp: 10,
  wp: 10,
  attack: 10,
  defense: 10,
  speed: 10,
  intelligence: 10,
}
export const CREATE_MONSTER_INITIAL_STATE = {
  name: "",
  description: "",
  image: null,
  ...CREATE_MONSTER_PARAMS_INITIAL_STATE,
}
