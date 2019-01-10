import React from 'react';
import { connect } from 'react-redux';

class UserDetail extends React.Component {
    render() {
        const {user} = this.props;
        if (!user) {
            return null;
        }
        return (
            <div>{user.name}</div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state.users);
    return { user: state.users.find(user => user.id === ownProps.userId) }
}
export default connect(mapStateToProps)(UserDetail);