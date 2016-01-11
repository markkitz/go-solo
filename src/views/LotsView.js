const React = require('react');
const {connect} = require('react-redux');
import LotView from '../containers/Lots/LotForm.js'

let LotsView = () => {
  return (<div>
          <h1>Lots View</h1>
          <LotView />
        </div>)
}
export default LotsView
