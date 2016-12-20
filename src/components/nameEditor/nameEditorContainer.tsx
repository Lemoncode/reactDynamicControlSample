import { connect } from 'react-redux';
import { NameEditorComponent } from './nameEditor';
import {updateUserProfileName} from '../../actions/updateUserProfileName';

const mapStateToProps = (state) => {
    return {
      userName: state.userProfileReducer.firstname
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (name : string) => {return dispatch(updateUserProfileName(name))}
  }
}

export const NameEditContainer = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(NameEditorComponent);
