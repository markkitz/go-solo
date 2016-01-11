const React = require('react');
const {connect} = require('react-redux');
import TextInput  from '../../components/TextInput.js'
import SubForm  from '../../components/Subform.js'

const CoursePackUploadForm = connect (
 (state) => {
         return   {currentForm:state.coursePackModule.currentForm};
    },
    (dispatch) => {
        return {
            UploadFileHandler: () => {console.log('upload'); }
            };
    })
    (({currentForm, UploadFileHandler}) =>
        {
            return (
                    <SubForm heading={'Upload Document'} isVisible={currentForm=='CoursePackUploadForm'}  form={'CoursePackUploadForm'}>
			             <div>hi</div>
		              </SubForm>
           );
        }
);


export default CoursePackUploadForm;
