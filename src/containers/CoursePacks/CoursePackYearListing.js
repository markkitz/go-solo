const React = require('react');
const {connect} = require('react-redux');
const actions = require('../../actions/actions.js');
import CoursePackYear from './CoursePackYear.js'


let CoursePackYearListing =({isLoaded, years, selectedYearId, selectCoursePackYearHandler, unselectCoursePackYearHandler, loadCoursePackYearListing}) => {

    if(!isLoaded) {
      loadCoursePackYearListing();
        return <h2>loading</h2>;
    }

    var yearsHTML = years.map(y => {
        return <CoursePackYear key={'coursePackYear_' + y.id } id={y.id} year ={y.year} terms={y.terms} selectedYearId={selectedYearId} selectCoursePackYearHandler={selectCoursePackYearHandler} unselectCoursePackYearHandler={unselectCoursePackYearHandler}/>;
    });
    return( <div>{yearsHTML}</div>);
};
CoursePackYearListing = connect(
    (state) => {

        return {isLoaded:state.coursePackYearListing.isLoaded, years: state.coursePackYearListing.years, selectedYearId:state.coursePackYearListing.selectedYearId};
    },
    (dispatch) => {
        const selectCoursePackYearHandler = (yearId) => {
            dispatch({type:'SELECT_COURSE_PACK_YEAR', yearId})
        }
        const unselectCoursePackYearHandler = () => {
            dispatch({type:'UNSELECT_COURSE_PACK_YEAR'})
        }
        const loadCoursePackYearListing = () => {
            dispatch(actions.loadCoursePackYearListing())
        }
        return { selectCoursePackYearHandler, unselectCoursePackYearHandler, loadCoursePackYearListing };
    }
)(CoursePackYearListing);
export default CoursePackYearListing;
