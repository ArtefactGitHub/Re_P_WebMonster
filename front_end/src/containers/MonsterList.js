import React from "react"
import { connect } from "react-redux"

import MonsterListPresenter from "../components/MonsterList"
import { loadMonsters } from "../actions/Monsters"

class MonsterList extends React.Component {
  componentDidMount() {
    this.props.loadMonsters()
  }

  render() {
    const { monsters } = this.props
    return (
      <div>
        <MonsterListPresenter monsters={monsters} />
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
)(MonsterList)
