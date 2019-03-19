const changeParam = (key, value) => {
  return {
    type: `CHANGE_${key.toUpperCase()}`,
    payload: { [key]: value },
  }
}

const reset = () => {
  return {
    type: "RESET",
  }
}

export { changeParam, reset }
