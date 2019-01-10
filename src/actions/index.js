import _ from 'lodash';
import JSONplaceholder from '../APIs/JSONplaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    const usersIds = _.uniq(_.map(getState().posts, 'userId'));
    usersIds.forEach(id => dispatch(fetchUser(id)));
}

export const fetchPosts = () =>  async (dispatch) => {
        const request = await JSONplaceholder.get('/posts');
        dispatch({
            type: "FETCH_POSTS",
            payload: request.data
        });
    }


export const fetchUser = (id) => async (dispatch) => {
        const request = await JSONplaceholder.get('/users/' + id);
        dispatch({
            type: 'FETCH_USER',
            payload: request.data
        });
    }
