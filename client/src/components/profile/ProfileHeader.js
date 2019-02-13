import React, { Component } from 'react'

class ProfileHeader extends Component {

    render() {

        // so easy to receive as well a property
        const { profile } = this.props;
        return (
            <div>
                <h1>profile Header</h1>
            </div>
        )
    }
}

export default ProfileHeader;