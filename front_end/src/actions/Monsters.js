import axios from "./shared"
import Settings from "../config/application"

const loadMonsters = () => {
  return dispatch => {
    axios
      .get(`${Settings.API_URL}/monsters`)
      .then(res => {
        dispatch({ type: "LOAD_MONSTERS", payload: { monsters: res.data } })
      })
      .catch(data => {
        console.log(data)
      })
  }
}

export { loadMonsters }
