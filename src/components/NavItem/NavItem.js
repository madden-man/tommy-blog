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

        const activeStyle = {
            backgroundColor: this.props.color,
            color: "white",
        };

        const borderStyle = {
            border: "2px ridge " + this.props.color,
        };

        return (
            <Link to={this.props.path} style={this.state.isActive ? activeStyle : {}} className="nav-item" onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
                <img src={require(`../../img/${this.props.img}`)} style={this.props.border ? borderStyle : {}} className="nav-logo" alt={this.props.text} />
                <span>{this.props.text}</span>
            </Link>
        )
    }
}

export default NavItem;
