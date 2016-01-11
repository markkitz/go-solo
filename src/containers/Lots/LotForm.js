const React = require('react');
const {connect} = require('react-redux');
const actions = require('../../actions/actions.js');
import ControlRow from './ControlRow.js'

let LotForm =({isLoaded, lotId, loadLot, rows}) => {

  console.log("rows", rows)
    if(!isLoaded) {
      loadLot(lotId);
      return <h2>loading</h2>;
    }

    let x = 0;
    let rowId =""
    var rowArray = rows.map(y => {
        rowId = 'row_' + x++
        return <ControlRow key={rowId}  row={y} />;
    });

    return( <div>{rowArray}</div>);
};
LotForm = connect(
    (state) => {
        let rows =  state.lots.formData ? state.lots.formData.rows: null;
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
