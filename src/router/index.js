const React = require('react');
const {connect} = require('react-redux');
import Viewtest from '../views/Viewtest.js'
let Router = ({routes, routeViews, routeName}) => {
  let view = routeViews[routeName]
  console.log(view)
  if(view == null)
  {
    view = routeViews['root']
  }
  return (<div>
    <div>{view}</div>
    </div>)
}
Router = connect((state) => {
  console.log(state, state.navigationReducer.routeName)
  return{routeName:state.navigationReducer.routeName}})(Router)
//export Router

var routeHashWatcher = {
  watch: (dispatch, routes) => {
    window.addEventListener('hashchange',() => {
      dispatch(navigationComplete(routes))
    } , false);
  }
}
function navigationComplete(routes) {
  var lookup = routes.lookup(window.location.hash.substr(1));
  return {
    type: 'NAVIGATION/COMPLETE',
    route: lookup,
  }
}
function loadIntialNav(dispatch, routes){
  dispatch(navigationComplete(routes))
}

module.exports = {Router, routeHashWatcher, loadIntialNav }
