import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import Main from './main';
import About from './about';
import Contact from './contact';
import Menu from './menu';

export default class App  extends Component {

    constructor() {
        super();
        //this.uploadVideo('bag it up')
    }

    onMenuItemClick = (index) => {
        if(index == 0){
            ReactDOM.render(<Main />, document.getElementById('wrapper'));
        }
        if(index == 1){
            ReactDOM.render(<About />, document.getElementById('wrapper'));
        }
        if(index == 2){
            ReactDOM.render(<Contact />, document.getElementById('wrapper'));
        }
    }



   render() {
       return (
           <div>
               <div className="left_side">
                   <h1 className="logo_text">
                       <a href=""><img src="images/logo.png" height="93" width="200" alt="" /></a>
                       <span>Блог о SEO</span>
                   </h1>
                   <div className="social_img">
                       <a href="#" className="tw_icon"></a>
                       <a href="#" className="go_icon"></a>
                   </div>
                   <div className="left_menu">
                       <Menu items={ ['Main', 'About blogger', 'Contact'] } onItemClick={this.onMenuItemClick} />
                   </div>
               </div>
            <a href="#" className="left_swap"></a>
            <div className="wrapper" id="wrapper">
                <Main />
            </div>
        </div>
        );
    }
}
