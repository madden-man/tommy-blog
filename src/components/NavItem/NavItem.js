import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './NavItem.css';

class NavItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isActive: false,
        };

    }

    onEnter = () => {
        this.setState({
            isActive: true,
        });
    }

    onLeave = () => {
        this.setState({
            isActive: false,
        });
    }

    render() {

        return (
            <Link to={this.props.path} className={this.state.isActive ? "nav-item active-item" : "nav-item"} onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
                <img src={require(`../../img/${this.props.img}`)} className={this.props.border ? "nav-logo bordered" : "nav-logo"} alt={this.props.text} />
                <span>{this.props.text}</span>
            </Link>
        )
    }
}

export default NavItem;
