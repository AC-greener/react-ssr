import React from 'react'
import { connect } from 'react-redux'
function Home(props) {
  return (
    <div>
      我是 home组件 我的名字是 {props.name}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch1: () => {
      dispatch(actionCreator)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)