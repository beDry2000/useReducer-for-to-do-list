import { useReducer, useRef } from 'react';

const initState = {
  job: '',
  jobs: []
}

const SET_JOB = 'setjob';
const ADD_JOB = 'addjob';
const DEL_JOB = 'deljob';

const setJob = payload => {
  return {
    type: SET_JOB,
    payload
  }
}
const addJob = payload => {
  return {
    type: ADD_JOB,
    payload
  }
}
const delJob = payload => {
  return {
    type: DEL_JOB,
    payload
  }
}
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_JOB:
      newState = {
        ...state,
        job: action.payload
      }
      break;
    case ADD_JOB:
      newState = {
        ...state,
        jobs: [...state.jobs, action.payload]
      }
      break;
    case DEL_JOB:
      newState = {
        ...state,
        jobs: state.jobs.filter((_, index) => index != action.payload)
      }
      break;
    default:
      throw new Error('Invalid action!!!');

  }
  return newState;
}

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