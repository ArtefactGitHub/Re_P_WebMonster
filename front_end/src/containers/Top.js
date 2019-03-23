import React from "react"
import { connect } from "react-redux"

import TopPresenter from "../components/Top"
import { loadMonsters } from "../actions/Monsters"

class Top extends React.Component {
  componentDidMount() {
    this.props.loadMonsters()
  }

  render() {
    const { monsters } = this.props
    return (
      <div>
        <TopPresenter monsters={monsters} />
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
)(Top)
