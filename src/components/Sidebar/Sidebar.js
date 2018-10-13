import React, { Component } from 'react';
import NavItem from '../NavItem';
import './Sidebar.css'

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        };

    }

    onEnter = () => {
        this.setState({
            isExpanded: true,
        });
    }

    onLeave = () => {
        this.setState({
            isExpanded: false,
        });
    }

    render() {

        return (
            <main className={this.state.isExpanded ? "sidebar-holder expanded" : "sidebar-holder not-expanded"}>
                <div className="left-sidebar dark" onMouseEnter={this.onEnter} onMouseLeave={this.onLeave}>
                    <NavItem text="Home" img="tommy_real.jpg" path="/" border={true} />
                    <NavItem text="Air" img="air-symbol.jpg" path="/air"/>
                    <NavItem text="Water" img="water-symbol.jpg" path="/water"/>
                    <NavItem text="Earth" img="earth-symbol.jpg" path="/earth"/>
                    <NavItem text="Fire" img="fire-symbol.jpg" path="/fire"/>
                </div>
            </main>
        )
    }
}

export default Sidebar;