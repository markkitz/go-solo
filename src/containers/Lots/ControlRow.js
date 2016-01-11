const React = require('react');
import ControlColumn from './ControlColumn.js'

let ControlRow =({row}) => {
  var colArray = row.columns.map(y => {
      return <ControlColumn key={y.fieldIdentifier} column={y} />;
  });
  return (<div>{colArray}</div>)
}
export default ControlRow;
