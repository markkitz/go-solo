const React = require('react');
const {connect} = require('react-redux');
import CoursePackYearListing from '../containers/CoursePacks/CoursePackYearListing.js'

let HomeView = () => {
  return (<div>
          <h1>Course Packs</h1>
          <CoursePackYearListing/>
        </div>)
}
export default HomeView
