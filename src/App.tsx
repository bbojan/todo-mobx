import { observer } from 'mobx-react-lite'
import React from 'react'
import './App.css'
import { useGlobals } from './store/GlobalContext'

const App: React.FC = () => {
  const { store } = useGlobals()

  React.useEffect(() => {
    const id = setInterval(() => {
      store.test()
    }, 1000)
    return () => {
      clearInterval(id)
    }
  }, [store])

  return (
    <div className="App">
      {store.todos.map((todo, index) => {
        return (
          <div key={index}>
            <h2>{todo}</h2>
          </div>
        )
      })}
    </div>
  )
}

export default observer(App)
