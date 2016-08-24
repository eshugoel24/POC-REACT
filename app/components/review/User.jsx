import React from 'react';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>User - {this.props.reviewdby}</div>
        );
    }
};

UserProfile.defaultProps = { reviewdby: 'Guest' };

export default UserProfile;