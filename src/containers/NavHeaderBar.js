const React = require('react');
const {connect} = require('react-redux');
import '../css/nav-header-bar.css'
let NavHeaderBar = ({currentRouteName, routeTitles}) => {

  return (
    <nav className='nhb'>
      <div className="nhb-c1">
        <span className="nhb-c1-sp1">
          <img  src="https://ssl.gstatic.com/bt/C3341AA7A1A076756462EE2E5CD71C11/1x/ic_menu_wht_1x.png" />
        </span>
        <span className="nhb-c1-sp2">
          {routeTitles[currentRouteName]}
        </span>
      </div>
    </nav>
  )
}
NavHeaderBar = connect (
    (state) => {
        let currentRouteName = state.navigationReducer.routeName
        return {currentRouteName};
    }
)(NavHeaderBar);
export default NavHeaderBar;
