import { SET_JOB, ADD_JOB, DEL_JOB } from "./constants"

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

export {setJob, addJob, delJob}