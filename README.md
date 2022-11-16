# React Introduction for interns

#### This is a simple introduction to React for interns. It is not meant to be a complete guide, but rather a quick introduction to the basics of React.

---

## What is React?

React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.

## Why React?

React is a library that is used to build user interfaces. It is a tool that is used to build the view layer of an application. It is not a framework, but rather a library. It is not meant to be a complete solution, but rather a tool that can be used to build a solution.

## What is a component?

A component is a small, reusable piece of code that is responsible for one job. It is a JavaScript function or a class that optionally accepts inputs, called props, and returns a React element that describes what should appear on the screen.

## What is JSX?

JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript. JSX produces React "elements".

## What is a state?

State is a plain JavaScript object that is used to store property values that belongs to the component. When the state object changes, the component re-renders.

## What is a prop?

Props are arguments passed into React components. Props are passed to components via HTML attributes.

## What is a lifecycle method?

Lifecycle methods are methods that gets called at different points in the life of a component. There are methods that gets called when the component gets created and inserted into the DOM, when the component updates, and when the component gets unmounted and removed from the DOM.

## What are the lifecycle methods?

There are three phases of the component lifecycle:

1. Mounting
2. Updating
3. Unmounting

### Mounting

These methods are called when an instance of a component is being created and inserted into the DOM:

- `constructor()`
- `static getDerivedStateFromProps()`
- `render()`
- `componentDidMount()`

### Updating

An update can be caused by changes to props or state. These methods are called when a component is being re-rendered:

- `static getDerivedStateFromProps()`
- `shouldComponentUpdate()`
- `render()`
- `getSnapshotBeforeUpdate()`
- `componentDidUpdate()`

### Unmounting

This method is called when a component is being removed from the DOM:

- `componentWillUnmount()`

## What is a virtual DOM?

The virtual DOM (VDOM) is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM. This process is called reconciliation.

## What is a higher-order component?

A higher-order component is a function that takes a component and returns a new component.

## What is a render prop?

A render prop is a technique for sharing code between React components using a prop whose value is a function.

## What is a controlled component?

A controlled component is a component that renders form elements and controls them by keeping the form data in the component's state.

## What is a uncontrolled component?

A uncontrolled component is a component that renders form elements and controls them by keeping the form data in the DOM.

## How to setup React?

To setup React, you need to install Node.js and npm. Then you can create a new React app by running the following command:

```bash
npx create-react-app my-app
cd my-app
npm start
```

## How to create a React app?

To create a React app, you need to install Node.js and npm. Then you can create a new React app by running the following command:

```bash
npx create-react-app my-app
cd my-app
npm start
```

## What are the different ways to create a React component?

There are two ways to create a React component:

1. Function component
2. Class component

### Function component

A function component is a JavaScript function that accepts props as an argument and returns a React element.

## How to create a functional component?

To create a functional component, you can write a JavaScript function that returns a React element:

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Class component

A class component is a JavaScript class that extends React.Component and has a render method that returns a React element.

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

## What are the different ways to render a React component?

There are two ways to render a React component:

1. ReactDOM.render()
2. ReactDOM.hydrate()

### ReactDOM.render()

ReactDOM.render() is used to render a React element into the DOM in the supplied container and return a reference to the component.

```js
ReactDOM.render(element, container[, callback])
```

### ReactDOM.hydrate()

ReactDOM.hydrate() is used to hydrate a container whose HTML contents were rendered by ReactDOMServer.

```js
ReactDOM.hydrate(element, container[, callback])
```

## What are the different ways to pass data to a React component?

There are two ways to pass data to a React component:

1. Props
2. State

### Props

Props are arguments passed into React components. Props are passed to components via HTML attributes.

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name='Sara' />;
ReactDOM.render(element, document.getElementById('root'));
```

### State

State is a plain JavaScript object that is used to store property values that belongs to the component. When the state object changes, the component re-renders.

```js
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Sara' };
  }

  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
```

## What are the different ways to handle events in React?

There are two ways to handle events in React:

1. Inline handler
2. Event handler

### Inline handler

An inline handler is a function that is passed as an attribute to an element.

```js
<button onClick={() => alert('Hello, world!')}>Click me</button>
```

### Event handler

An event handler is a function that is passed as a prop to an element.

```js
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    alert('The link was clicked.');
  }

  return (
    <a href='#' onClick={handleClick}>
      Click me
    </a>
  );
}

ReactDOM.render(<ActionLink />, document.getElementById('root'));
```

## What are the different ways to conditionally render a React component?

There are two ways to conditionally render a React component:

1. Ternary operator
2. && operator

### Ternary operator

A ternary operator is a JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy.

```js
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}

ReactDOM.render(
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

### && operator

The && operator is a JavaScript logical operator that returns the second operand if the first operand is truthy, otherwise it returns the first operand.

```js
function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
    </div>
  );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];
ReactDOM.render(
  <Mailbox unreadMessages={messages} />,
  document.getElementById('root')
);
```

## What are hooks?

Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.

## What are the different types of hooks?

There are two types of hooks:

1. State hooks
2. Effect hooks

### State hooks

State hooks are functions that let you “hook into” React state from function components.

#### useState()

The useState() hook is used to add state to function components.

```js
const [count, setCount] = useState(0);
```

#### useReducer()

The useReducer() hook is an alternative to useState(). It accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method.

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

### Effect hooks

Effect hooks are functions that let you “hook into” React lifecycle features from function components.

#### useEffect()

The useEffect() hook is used to perform side effects in function components.

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

#### useLayoutEffect()

The useLayoutEffect() hook is the same as useEffect(), but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect() will be flushed synchronously, before the browser has a chance to paint.

```js
useLayoutEffect(() => {
  document.title = `You clicked ${count} times`;
});
```

#### useDebugValue()

The useDebugValue() hook is used to display a label for custom hooks in React DevTools.

```js
useDebugValue(value);
```
