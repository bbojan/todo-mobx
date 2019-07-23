import { observer } from 'mobx-react-lite';
import { useStore } from '../store/GlobalContext';
import React from 'react'
import { delayed } from '../utils/helper';
import { GlobalStore } from '../store/GlobalStore';

const use10times = (store:GlobalStore) =>{
    React.useEffect(()=>{
        const funk = async () =>{
            for(let i=0; i < 10;i++){
                await delayed(2000)
                store.execute(()=> store.filterImportant = !store.filterImportant)
            } 
        } 
        funk()
    },[store])
}

const TheList: React.FC = () => {
    const { store } = useStore()
    use10times(store)

    return (
        <div>
            {
                store.filteredTodos.map(todo => (
                    <div key={todo.id}><span>{todo.value}</span><span>{todo.important && ' !!! '}</span></div>
                ))
            }
        </div>
    )
}

export default observer(TheList)
  