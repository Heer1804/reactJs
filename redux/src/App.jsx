
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/actions'

function App() {
  let count = useSelector((state)=>state.count)
  let dispatch = useDispatch()

  return (
    <>
      <button onClick={()=>dispatch(increment())}>Increment</button>{count}
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default App
