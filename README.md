## February 2020 Experiments

This project contains a few of my recent React experiments with infinate scroll and lazy loading.

I've used the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for the infinate scroll feature, which includes features beyond what we could get with an event listener and has a polyfill that can be used to support older browsers. Besides detecting when to load more posts, an Intersection Observer is used in the `UmountHiddenWrapper` component to improve performance by unmounting children that are not visible to the user.

Lazy loading components with [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) allows for splitting a component and any dependencies into separate JavaScript chunks that are loaded only on when needed. In my example, I load a JavaScript animation library when no more items are available.

Other areas of experimentation include TypeScript, CSS styling, and state management with an asynchronous call and useReducer.

## CodeSandbox

[Click here to view in CodeSandbox](https://codesandbox.io/s/competent-knuth-qt57b?fontsize=14&hidenavigation=1&theme=dark)

## Running locally

After installing dependencies, run `yarn start` in the project directory to run the application in development mode.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
