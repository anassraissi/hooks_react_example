# hooks React
```
Hooks are features that allow you to “hook into” the features of React state and lifecycle from function components.
```
# custom hook 
```
 to manage more than hook from one affectation from internal or external file. 
```

# useMemo 
```
we use useMemo for cash or make varialbles when changes cause event changes, or store variable that we need after serving a lot of request or function. 
```

# useReducer 
```
is a React Hook that is used for state management in React applications. It is an alternative to the more commonly used useState Hook and is particularly useful when dealing with complex state logic that involves multiple sub-values or when the next state depends on the previous one.
```
## exemple useReducer
``````
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const [state, dispatch] = useReducer(reducer, { count: 0 });
dispatch({ type: 'INCREMENT' });

return (
  <div>
    Count: {state.count}
    <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
  </div>
);
`````` 
# useRef
``````
In React, the useRef hook is used to create a mutable object that has a current property. This property can be assigned a value, and it persists across renders. useRef is often used to access or interact with a DOM element directly or to persist values across renders without causing a re-render when the value changes.
``````
