import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import Header from '../../components/Header'
import styles from './style.css'
class Home extends React.Component {
  componentWillMount() {
    if(styles) {
      this.props.staticContext = styles._getCss()
      console.log(styles._getCss())
    }
  }
 render() {
  return (
    <div>
      <Header/>
      <div  className={styles.test} >
        我是 home组件 我的名字是 
      </div>
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
  return store.dispatch(getHomeList(true))  //返回一个promise
}
// https://api.myjson.com/bins/1anz26
const getHomeList = (server)=>{
  var url
  if(server) {
    url =  'https://api.myjson.com/bins/1anz26'
  } else {
    url = '/api/bins/1anz26'
  }
  return (dispatch) => {
    return axios.get(url)
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
      dispatch(getHomeList(false))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)