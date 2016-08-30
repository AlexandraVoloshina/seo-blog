import React, {Component} from 'react';


class Comment extends Component {

    render(){

        const {comment: {text, user}} = this.props;
        return(
            <p>
                {text} <br /> <i>by {user}</i>
            </p>
        );
    }
}

export default Comment;