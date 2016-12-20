import { connect } from 'react-redux';
import { NameDisplayComponent } from './nameDisplay';


const mapStateToProps = (state) => {
    return {
      userName: state.userProfileReducer.firstname
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const NameDisplayContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(NameDisplayComponent);
