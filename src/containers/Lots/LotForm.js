const React = require('react');
const {connect} = require('react-redux');
const actions = require('../../actions/actions.js');

let LotForm =({isLoaded, lotId, loadLot, rows}) => {

    if(!isLoaded) {
      console.log(loadLot);
      loadLot(lotId);
      return <h2>loading...</h2>;
    }

    return( <div>{lotId}</div>);
};
LotForm = connect(
    (state) => {
        let rows =  state.lots.isLoaded ? state.lots.rows: null;
        return {isLoaded:state.lots.isLoaded, lotId: state.navigationReducer.routeOptions.id, rows: rows};
    },
    (dispatch) => {
      const loadLot = (lotId) => {
        dispatch(actions.loadLot(lotId))
      }
      return {loadLot};
    }
)(LotForm);
export default LotForm;
