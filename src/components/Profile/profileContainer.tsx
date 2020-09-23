import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUsersProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
} from "../../redux/Profile_Reducer";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { WithRedirect } from "../Hoc/AuthRedirect";
import { compose } from "redux";
import { ProfileType } from "../../types/types";
import { AppStateType } from "../../redux/redux-store";

type mapsProps = {
  profile: ProfileType
  status: string
  authorizedUser: number
  isAuth: boolean

};

type Dispatch = {
  getUsersProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  savePhoto: (file: File) => void;
  saveProfile: (profile: ProfileType) => Promise<any>;
};

type PathParams = {
  userId: string;
};


type Props = mapsProps & Dispatch & RouteComponentProps<PathParams>;
class ProfileContainer extends React.Component<Props> {
  refreshProfile() {
    let userId: number | null = +this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUser;
      if (!userId) {
        this.props.history.push("/login");
      }
    }
    if (!userId) {
      console.error("Id should exists");
    } else {
      this.props.getUsersProfile(userId);
      this.props.getStatus(userId);
    }
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps: Props, prevState: Props) {
    if (this.props.match.params.userId != prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        //@ts-ignore
        StatusHook={this.props.status}
        updateStatus={this.props.updateStatus}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
        saveProfile={this.props.saveProfile}
      />
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  profile: state.ProfilePage.profile,
  status: state.ProfilePage.status,
  authorizedUser: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<React.ComponentType>(
  connect(mapStateToProps, {
    getUsersProfile,
    getStatus,
    updateStatus,
    savePhoto,
    saveProfile,
  }),
  withRouter,
  WithRedirect //HOC
)(ProfileContainer);
