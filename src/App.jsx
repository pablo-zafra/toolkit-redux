import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter';

function App() {


  const { value } = useSelector( state => state.counter );
  const dispatch = useDispatch();

  // console.log( useSelector( state => state ) );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count is { value }</h1>
      <div className="card">
        <button style={ {margin: 3} } onClick={ () => dispatch(increment( value ))}>
          Increment
        </button>
        <button style={ {margin: 3} } onClick={ () => dispatch(decrement( value ))}>
          Decrement
        </button>
        <button style={ {margin: 3} } onClick={ () => dispatch(incrementByAmount( value ))}>
          Duplicate
        </button>
      </div>
    </>
  )
}

export default App
