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
    dispatch(submitStart())

    axios
      .post(`${Settings.API_URL}/monsters`, monster)
      .then(res => {
        dispatch(submitEnd())
        dispatch({ type: "CREATE_MONSTER", payload: { monster: res.data } })
      })
      .catch(data => {
        dispatch(submitEnd())
        console.log("failure", data)
      })
  }
}

const submitStart = () => {
  return {
    type: "SUBMIT_START",
  }
}
const submitEnd = () => {
  return {
    type: "SUBMIT_END",
  }
}

export { updateParams, createMonster, submitStart, submitEnd }
