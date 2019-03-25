import axios from "axios"
import Settings from "../config/application"

const updateParams = (key, value) => {
  return {
    type: "UPDATE_PARAMS",
    payload: { [key]: value },
  }
}

const createMonster = monster => {
  return dispatch => {
    axios
      .post(`${Settings.API_URL}/monsters`, monster)
      .then(res => {
        dispatch({ type: "CREATE_MONSTER", payload: { monster: res.data } })
      })
      .catch(data => {
        console.log("failure", data)
      })
  }
}

export { updateParams, createMonster }
