const React = require('react');
const {connect} = require('react-redux');
import MenuBar  from '../../components/MenuBar.js';

let CoursePackMenuBarContainer = ({menuItems, currentForm, menuBarClickHandler}) => {
    return (<MenuBar menuItems={menuItems} currentItem={currentForm} menuBarClickHandler={menuBarClickHandler} />);
}

CoursePackMenuBarContainer = connect (
    (state) => {
        let {forms, currentForm} = state.coursePackModule
        return {menuItems:forms, currentForm};
    },
    (dispatch) => {
        const menuBarClickHandler = (form) => {
          dispatch({type:'NAVIGATE_TO_FORM', form});
        };
        return {menuBarClickHandler};
    }
)(CoursePackMenuBarContainer);

export default CoursePackMenuBarContainer;
