import React, {Component} from 'react';

/*const SearchBar = (props) => (
    <div className="search-bar-box row form-group">
        <input
            className="form-control" />
    </div>
);*/

class AddItem extends Component {

    onHandler = e => {
        e.preventDefault();
        const id = this.refs.id;
        const title = this.refs.title;
        const description = this.refs.description;
        const img = this.refs.img;

        const item = {id : id.value, title : title.value, description : description.value, img : img.value};
        this.props.addItem({item, url:this.state.filePath});
        id.value = '';
        title.value = '';
        description.value = '';
        img.value = '';
    }
    onFileChange = e =>{
        this.state = {filePath : e.target.files[0]};
    }
    render(){
        return(
            <div className="row-add">
                <h3>Add new article:</h3>
                <form onSubmit={this.onHandler}>
                    <div className="form-group">
                        <br /><br /><p>Title:</p>
                        <input type="title" ref="title"/><br /> <br />
                        <p>Description:</p>
                        <textarea name="description" ref="description" cols="40" rows="3"></textarea><br /> <br />
                        <input type="file" ref="img" onChange={this.onFileChange}/>
                    </div>
                    <br />
                    <button className="btn-add">Add article</button>
                </form>
            </div>
        );
    }
}

export default AddItem;
