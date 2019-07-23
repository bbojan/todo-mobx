import { observer } from 'mobx-react-lite';
import { useStore } from '../store/GlobalContext';
import Form from './Form';
import React from 'react'
import TheList from './TheList';

const View: React.FC = () => {
    const { store } = useStore()

    return (
      <div>
        <div>
          <Form></Form>
        </div>
        <div>
          <TheList></TheList>
        </div>
      </div>
    )
  }
  
  export default observer(View)
  