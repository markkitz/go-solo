const React = require('react');
import CoursePackInfoForm  from './CoursePackInfoForm.js'
import CoursePackPrintDetailsForm  from './CoursePackPrintDetailsForm.js'
import CoursePackMenuBarContainer from './CoursePackMenuBarContainer.js'
import CoursePackUploadForm from './CoursePackUploadForm.js'
const {connect} = require('react-redux');
import '../../css/course-pack-module.css'

let CoursePackModule = ({id, isLoaded, unselect, termName}) => {
		return(
			isLoaded == false ? <h2>loading</h2>:
		<div className="cpm">
			<div className={'cpm-hdr'} onClick={() => unselect()} >{termName}</div>
      <CoursePackMenuBarContainer />
			<CoursePackInfoForm  />
			<CoursePackPrintDetailsForm />
      <CoursePackUploadForm />
		</div>);
};
CoursePackModule = connect(
	(state) => {
		const currentForm = state.coursePackModule.forms.find(f => f.key == state.coursePackModule.currentForm);
		return {
		isLoaded:state.coursePackModule.isLoaded
		};},
	(dispatch) => {
		 const unselect = () => dispatch({type:'UNSELECT_COURSE_PACK_TERM'})
		 return {unselect}
        })(CoursePackModule);
export default CoursePackModule;
