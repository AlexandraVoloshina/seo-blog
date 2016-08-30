import React from 'react';

const ListItem = ({item, onSelect}) => (
    /*<div className="row-text">
		<div>
		<h3>{title}</h3>
		</div>
        <div className="text-img">
            <img src={img} />
        </div>
        <div>
            <p>{description}</p>
        </div>
    </div>*/

    <div className="footer_block" onClick={onSelect}>
        <div>
            <h4 >{item.title}</h4>
        </div>
        <div className="text-img">
            <img src={item.img} />
        </div>
    </div>
);
export default ListItem;
