import React from 'react';
import ListItem from './list-item';

const List = ({data, onSelect}) => (
  <div>
    {
        data.map(item =>
            <ListItem key={item.id}
                      item={item}
                      onSelect={()=> onSelect(item)}
            />
        )
    }
</div>
);
export default List;