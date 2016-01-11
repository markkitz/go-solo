const React = require('react');
const Select = require('react-select')
import '../../css/react-select.css'
let ControlDropDown=({fieldIdentifier, options, value}) => {
  var opts = options.map(v => { return {value:v.id  , label:v.value} } )




  function logChange(val) {
      console.log("Selected: " + val);
  }




  return (<div>
    <Select
        name={fieldIdentifier}
        options={opts}
        value={value}
        onChange={logChange}
    />
    </div>)
}
function logChange(val) {
    console.log("Selected: " + val);
}
export default ControlDropDown;
