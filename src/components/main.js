import React, {Component} from 'react';

import data from '../data/list.json';
import List from './list';
import ListItem from './list-item';
import ListItemDetails from './list-item-details';
import AddItem from './add-item';
import Pagination from './pagination';

export default class Main  extends Component {

    constructor() {
        super();
        this.state = {
            data: data,
            items: data,
            selectedItem:data[0],
            perPage: 2
        }
        //this.uploadVideo('bag it up')
    }

    componentDidMount = () => {
        this.onChangePage(1);
    }
    getData = (page) => {
        return data.slice((page - 1) * this.state.perPage, page * this.state.perPage);
    }

    onChangePage = (page) => {
        this.setState({
            loading: true
        });

        var data = this.getData(page);

        this.setState({
            items: data,
            loading: false
        });
    }
    renderItem = (item) => {
        return <li key={item.id}>{item.title}</li>;
    }

    onSelect = selectedItem => {
        this.setState({selectedItem})
    }

    addItem = ({item , url}) => {
        if(!item || item.id < 0){
            return;
        }
        if (url) {
            var reader = new FileReader();
            var context = this;
            reader.onload = function (e) {
                item.img = e.target.result;
                context.rederItem(item);

            };
            reader.readAsDataURL(url);
        }

    }
    rederItem = item => {
        const newItems = [
            ...this.state.items,
            item
        ];
        this.setState({items: newItems});
    }
    render() {
        return (
                <div>
                    <div className="wrapper_top">
                        <div alt="foto-project" className="foto"></div>
                        <h1>SEO BLOG of Alexandra Voloshina</h1>
                    </div>
                    <div>
                    <div className="text_block">
                        <ListItemDetails
                    item={this.state.selectedItem}
                    />
                    <Pagination max={Math.ceil(this.state.data.length / this.state.perPage)} onChange={this.onChangePage} />
                    <List data={this.state.items} onSelect={this.onSelect}/>

                    </div>
                    <div className="footer">
                        <AddItem
                    addItem={this.addItem}
                    />
                    </div>
                    </div>
                </div>
        );
    }
}
