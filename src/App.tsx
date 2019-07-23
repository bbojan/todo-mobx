import { observer } from 'mobx-react-lite'
import React from 'react'
import './App.css'

import View from './controls/View';

const App: React.FC = () => {

  return (
    <div>
      <View></View>
    </div>
  )
}

export default observer(App)
