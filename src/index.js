import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import rootReducer from './reducers/index';
import initialState from './state/index';
import { addProject, addTool } from './actions/index';

const store = createStore(rootReducer, applyMiddleware(thunk));
initialState.projects.forEach((project) => {
  store.dispatch(addProject(project));
  project.tools.forEach((tool) => store.dispatch(addTool(tool)));
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
