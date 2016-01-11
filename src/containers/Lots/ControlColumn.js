const React = require('react');
import ControlTextBox from '../../components/controls/ControlTextBox.js'
import ControlNumeric from '../../components/controls/ControlNumeric.js'
import ControlDropDown from '../../components/controls/ControlDropDown.js'
let ControlColumn=({column}) => {
  //console.log(column)


  return (<section>
            <label>{column.label}</label>

            {column.fieldType}
            {GetField (column)}
          </section>
        )
}

function GetField(column){
console.log('hit' + column.fieldType)
  switch (column.fieldType) {
    case 'Numeric':
        return <ControlNumeric />
    case 'DropDown':
        return <ControlDropDown options={column.options} value={column.value} />
    default:

  }
  return (<ControlTextBox />)
}

export default ControlColumn;
