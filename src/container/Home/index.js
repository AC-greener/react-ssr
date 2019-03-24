import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
class Home extends React.Component {
 render() {
  return (
    <div>
      我是 home组件 我的名字是 
      { this.props.homeList ?
        this.props.homeList.map(item => {
          return (
            <div key={item.id}>{item.id}</div>
          )
        }) : ''
      }
    </div>
  )
 }
 componentDidMount() {  //服务器端没有这个生命周期
  this.props.getHomeList()
 }

 
}
Home.loadData = function(store) {
  return store.dispatch(getHomeList())  //返回一个promise
}
const getHomeList = ()=>{
  return (dispatch) => {
    return axios.get('https://api.myjson.com/bins/1anz26')
      .then(res => {
        dispatch({type: 'getDataList', payload: res.data.data})
      }).catch(err => {
        console.log('请求数据失败！', err)
      })
  }
}
const mapStateToProps = (state) => {
  return {
    name: state.name,
    homeList: state.homelist
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