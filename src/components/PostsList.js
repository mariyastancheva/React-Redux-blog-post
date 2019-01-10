import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';
import UserDetail from './UserDetail';

class PostsList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }
    renderList(){   
        return this.props.posts.map((post)=> {
            return(
                <div key = {post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <div>
                       Name: <UserDetail userId = {post.userId}/>
                    </div>
                </div>
            );
        });
    }

    render(){
        return <div>{this.renderList()}</div>
    }
}
const mapStateToProps = (state) => {
    return {posts: state.posts};
}
export default connect(mapStateToProps,{fetchPostsAndUsers} )(PostsList);