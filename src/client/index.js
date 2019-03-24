import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import Routes from '../Routes'
import { Provider } from 'react-redux'
import { getClientStore } from '../store/index'


const App = () => {
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          { Routes.map(route=>{
              return <Route {...route} />
            })
          }
        </div>
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.hydrate(<App />, document.getElementById('app'))