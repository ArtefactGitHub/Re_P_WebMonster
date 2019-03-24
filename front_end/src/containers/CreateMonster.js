import React from "react"
import { connect } from "react-redux"

import CreateMonsterPresenter from "../components/CreateMonster"
import { loadMonsters } from "../actions/Monsters"

class CreateMonster extends React.Component {
  componentDidMount() {
    this.props.loadMonsters()
  }

  render() {
    const { monsters } = this.props
    return (
      <div>
        <CreateMonsterPresenter monsters={monsters} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    monsters: state.monsters,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadMonsters: () => {
      dispatch(loadMonsters())
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMonster)
