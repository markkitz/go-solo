const React = require('react');
const ReactRedux = require('react-redux');
const {connect} = ReactRedux;
import TextInput  from '../../components/TextInput.js'
import SubForm  from '../../components/Subform.js'

const CoursePackPrintDetailsForm = connect (
     (state) => {
         return   {visibleForm:state.coursePackModule.currentForm, model:state.coursePackModule.formData.printDetails };
    },
    (dispatch) => {
        return {
            dispatchSetVariable: (name, value) => {dispatch({type:'UPDATE_PRINTDETAILS', keyValue:{name, value} }); }
            };
    })
    (({visibleForm, model, dispatchSetVariable}) =>
        {
            let isDirty = false;
            const setVariable = (name, value) =>{
                isDirty = true;
                dispatchSetVariable(name, value);
            };
            const saveState = () =>{};
            return (
                    <SubForm heading={'Print Details'} isVisible={visibleForm=='CoursePackPrintDetailsForm'}  form={'CoursePackPrintDetailsForm'}>
			<TextInput label="field1:" name="field1" value={model.field1} onChange={setVariable}  onBlur = {saveState}  />
		  </SubForm>
           );
        }
);


export default CoursePackPrintDetailsForm;
