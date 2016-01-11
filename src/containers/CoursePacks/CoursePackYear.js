const React = require('react');
import CoursePackTerms from './CoursePackTerms.js'
import '../../css/course-pack-year.css'

const CoursePackYear = ({id, year, terms, selectedYearId,selectCoursePackYearHandler, unselectCoursePackYearHandler}) => {
    let tdTerms = terms.map(t => {
        return <td key={'tdTerm_' + t.id}>{t.term}</td>}
      );
    return(<div>
            {id == selectedYearId ? (
                <div className='cpy-selected'>
                <div className='cpy-close-btn' onClick={() => unselectCoursePackYearHandler()}>
                    <i className="glyphicon glyphicon-remove"></i>
                </div>
                    <h2>test</h2>
                    <CoursePackTerms  id={id} terms={terms}/>
                </div>) :
            (<div className='cpy'  onClick={() => selectCoursePackYearHandler(id)}>
            <table className='cpy-table'>
                <tbody>
                    <tr>
                        <td>{year}</td>
                        {tdTerms}
                    </tr>
                </tbody>
            </table>
          </div> )}
        </div>)
};



export default CoursePackYear;
