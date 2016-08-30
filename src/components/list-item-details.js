import React, {Component} from 'react';
import CommentList from './comment-list';

class ListItemDetails extends Component {
    render(){
        const {item, onSelect} = this.props;

        return(
            <div className="row-text">
                <div>
                    <h3>{item.title}</h3>
                </div>
                <div className="text-img">
                    <img src={item.img} />
                </div>
                <div>
                    <p>{item.description}</p>
                </div>
                <CommentList comments={item.comments}  />
    </div>
        );
    }

}

/*const ListItemDetails = ({item, onSelect}) => (
    <div className="row-text">
		<div>
		<h3>{item.title}</h3>
		</div>
        <div className="text-img">
            <img src={item.img} />
        </div>
        <div>
            <p>{item.description}</p>
        </div>
        <CommentList comments={item.comments}  />
    </div>
);*/
export default ListItemDetails;
