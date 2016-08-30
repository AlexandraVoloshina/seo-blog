import React, {Component} from 'react';
import Comment from './comment';

class CommentList extends Component {
    render(){
        const {comments, onSelect}  = this.props;
        if(!this.props.comments.length) {
            return <div className="comment">No comments yet.</div>;
        }
        const comment = comments.map(comment => <div className="comment" key={comment.id}>

                <Comment comment={comment}/>
            </div>);

        return(
            <div>
                <br /><h5>Comments:</h5>
                {comment}
            </div>
        );
    }
}

export default CommentList;