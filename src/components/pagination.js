import React, {Component} from 'react';

class Pagination extends Component {
    constructor() {
        super();
        this.state = {
            prevPage: 1,
            currentPage: 1,
            maxVisible: 5
        }
        //this.uploadVideo('bag it up')
    }

    propTypes: {
        max: React.PropTypes.number.isRequired,
        maxVisible: React.PropTypes.number,
        onChange: React.PropTypes.func.isRequired
    }
    componentDidUpdate = ({prevProps, prevState}) =>  {
        if (this.state.prevPage !== this.state.currentPage) {
            this.state.prevPage = this.state.currentPage;
            this.props.onChange(this.state.currentPage);
        }
    }
    goTo = (page) =>  {
        this.state.prevPage = this.state.currentPage;
        this.setState({currentPage: page});
    }

    onClickNext = () => {
        var page = this.state.currentPage;

        if (page < this.props.max) {
            this.goTo(page + 1);
        }
    }
    onClickPrev = () => {
        if (this.state.currentPage > 1) {
            this.goTo(this.state.currentPage - 1);
        }
    }
    render = () => {
        var className = this.props.className || '',
            p = this.props,
            s = this.state,
            skip = 0;

        if (s.currentPage > s.maxVisible - 1 && s.currentPage < p.max) {
            skip = s.currentPage - s.maxVisible + 1;
        } else if (s.currentPage === p.max) {
            skip = s.currentPage - s.maxVisible;
        }

        var iterator = Array.apply(null, Array(s.maxVisible)).map(function(v, i) {
            return skip + i + 1;
        });

        return (
            <nav>
                <ul className={'pagination ' + className}>
                    <li className={s.currentPage === 1 ? 'disabled' : ''}>
                        <a onClick={this.onClickPrev}>
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Prev</span>
                        </a>
                    </li>
                    {iterator.map(function(page) {
                        return (
                            <li key={page}
                                className={s.currentPage === page ? 'active' : ''}>
                                <a onClick={this.goTo.bind(this, page)}>{page}</a>
                            </li>
                        );
                    }, this)}
                    <li className={s.currentPage === p.max ? 'disabled' : ''}>
                        <a onClick={this.onClickNext}>
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Next</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Pagination;