import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Spinner from '../common/Spinner';
import { getProfiles } from '../../actions/profileActions';
import ProfileItem from './ProfileItem';

class Profiles extends Component {

    componentDidMount() {
        // calling this action make profile come in from the state
        this.props.getProfiles();
    }

    render() {
        // getting values which comes from redux
        const { profiles, loading } = this.props.profile;

        let profileItems;

        if (profiles === null || loading) {
            profileItems = <Spinner />;
        } else {
            if (profiles.length > 0) {
                profileItems = profiles.map(profile => (
                    // passing the profile property to the child component ProfileItem
                    <ProfileItem key={profile._id} profile={profile} />
                ))
            } else {
                profileItems = <h4>No profiles found.</h4>
            }
        }

        return (
            <div className="profiles">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">
                                Developers Profiles
                            </h1>
                            <p className="lead text-center">
                                Browse and connect with developers
                            </p>
                            {profileItems}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Profiles.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

// the profileReducer.js returns for the GET_PROFILE action a profile from the backend
// the arrow function mapStateToProps receives the state and assign the property profile
// with the value from the state
const mapStateToProps = state => ({
    profile: state.profile
})

export default connect(mapStateToProps, { getProfiles })(Profiles);