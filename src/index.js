var riot = require('riot')
var redux = require('redux')
var thunk = require('redux-thunk')

require('./tags/todo-app.tag')
require('./tags/task-list.tag')
require('./tags/loading-indicator.tag')

var reducer = function(state={tasks:[]},action){
  console.log(action)
  switch(action.type){
    case 'TASKS_LOADED':
      return Object.assign({},state,{tasks:action.data})
    case 'TOGGLE_LOADING':
      /*set isLoading prop on state based on data passed in*/
    default:
      return state
  }
}

// var reduxStore = redux.createStore(reducer)
var createStoreWithMiddleware = redux.compose(
  redux.applyMiddleware(thunk)
)(redux.createStore)

var reduxStore = createStoreWithMiddleware(reducer)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('todo-app',{store:reduxStore})
})
