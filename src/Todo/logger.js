function logger(reducer) {

    return (prevState, action) => {
        console.group(action.type)
        console.log('Action: ', action.type);
        console.log('Previous State: ', prevState);
        const newState  = reducer(prevState, action);
        console.log('Current State: ', newState);
        console.groupEnd();

        return newState
    }
}

export default logger;