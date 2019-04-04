import axios from "axios"
import Settings from "../config/application"

const createMonsterUpdateParams = (key, value) => {
  return {
    type: "CREATE_MONSTER_UPDATE_PARAMS",
    payload: { [key]: value },
  }
}
const createMonsterCreate = response => {
  return {
    type: "CREATE_MONSTER",
    payload: { monster: response.data },
  }
}

const createMonster = ({ monster, successCb, errorCb }) => {
  return dispatch => {
    dispatch(submitStart())

    axios
      .post(`${Settings.API_URL}/monsters`, monster)
      .then(response => {
        dispatch(submitEnd())
        dispatch(createMonsterCreate(response))
        successCb()
      })
      .catch(error => {
        dispatch(submitEnd())
        errorCb(error)
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

export { createMonsterUpdateParams, createMonster, submitStart, submitEnd }
