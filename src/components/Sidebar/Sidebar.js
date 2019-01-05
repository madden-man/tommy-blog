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
                    <NavItem text="Home" img="tommy_real.jpg" path="/" color="darkgreen" border={true} />
                    <NavItem text="Theology" img="air-symbol.jpg" color="#286977" path="/air"/>
                    <NavItem text="Poetry" img="fire-symbol.jpg" color="#671414" path="/fire"/>
                    <NavItem text="Stories" img="water-symbol.jpg" color="#24435c" path="/water"/>
                    <NavItem text="Projects" img="earth-symbol.jpg" color="#00380a" path="/earth"/>
                    <NavItem text="Memories" img="stories.png" path="/stories" color="darkgreen" border={true} />
                    <NavItem text="Options" img="stories.png" path="/options" color="darkgreen" border={true} />
                </div>
            </main>
        )
    }
}

export default Sidebar;