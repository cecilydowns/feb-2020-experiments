## February 2020 Experiments

This project contains a few of my recent React experiments with lazy loading and infinate scroll.

Lazy loading components using [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy) allows for splitting a component and any dependencies into a separate JavaScript chunk that is loaded only on demand - in my example, a JavaScript animation library that shows when no more items are available.

I've used the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for the infinate scroll feature, which includes features beyond what we could get with an event listener and has a polyfill that can be used to support older browsers. Besides detecting when to load more posts, an Intersection Observer is used in the `UmountHiddenWrapper` component to unmount children that are not visible to the user and improve performance.

Other areas of experimentation include TypeScript, CSS styling, and state management with an asynchronous call and useReducer.

## Codesandbox

[Click here to view in CodeSandbox](https://codesandbox.io/s/competent-knuth-qt57b?fontsize=14&hidenavigation=1&theme=dark)

## Running locally

After installing dependencies, run `yarn start` in the project directory to run the application in development mode.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
