import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>User - {this.props.username}</div>
        );
    }
};

UserProfile.defaultProps = { username: 'Guest' };

export default UserProfile;