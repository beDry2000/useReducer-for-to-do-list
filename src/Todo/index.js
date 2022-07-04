import { useReducer, useRef } from 'react';
import reducer, {initState} from './reducer';
import {setJob, addJob, delJob} from './action'



function App() {

  const [tasks, dispatch] = useReducer(reducer, initState);
  const { job, jobs } = tasks;

  const inputRef = useRef();
  const handleSubmit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''));
    inputRef.current.focus();
  }
  return (
    <div style={{ padding: '18px 40px' }}>
      <h1>Todo</h1>
      <input
        ref={inputRef}
        value={job}
        placeholder='Enter todo...'
        onChange={e => dispatch(setJob(e.target.value))}
      />
      <button
        onClick={handleSubmit}
      >Add</button>
      <ul>
        {
          jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span onClick={() => dispatch(delJob(index))}>
                 &times;
              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;