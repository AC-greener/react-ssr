import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
class Home extends React.Component {
 render() {
  return (
    <div>
      我是 home组件 我的名字是 {this.props.name}
    </div>
  )
 }
 componentDidMount() {  //服务器端没有这个生命周期
  this.props.getHomeList()
 }

 
}
Home.loadData = function() {
  
}
const getHomeList = ()=>{
  return () => {
    axios.get('/api.js')
      .then(res => {
        console.log(res)
      })
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getHomeList: () => {
      dispatch(getHomeList())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)