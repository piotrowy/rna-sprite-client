/**
 * Created by piotrowy on 11.02.2017.
 */
import {connect} from 'react-redux';
import MainNav from './../components/MainNav'

export default connect(
  state => state.tabs,
  dispatch => ({
    switchTab: (tab) => {
      dispatch({type: 'SWITCH_TAB', tab: tab})
    }
  })
)(MainNav)