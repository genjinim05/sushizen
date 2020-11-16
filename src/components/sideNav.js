import React from 'react';
import { Nav, Card } from 'react-bootstrap';
import { connect } from "react-redux";


class SideNav extends React.Component{

    render() {
        return (
            <div className="sideNavDiv">
                <ul className="sideList">
                    <li className="sideInnerList">
                        <a href="#sushi"><p className="sideNavText" >Sushi</p></a>
                    </li>
                    <li className="sideInnerList">
                        <a href="#roll"><p className="sideNavText" >Maki / <br/> Roll</p></a>
                    </li>
                    <li className="sideInnerList">
                        <a href="#handroll"><p className="sideNavText" >Temaki / <br/> Handroll</p></a>
                    </li>
                    <li className="sideInnerList">
                        <a href="#ramen"><p className="sideNavText" >Ramen / <br/> Noodles</p></a>
                    </li>
                    <li className="sideInnerList">
                        <a href="#rice"><p className="sideNavText" >Don / <br/> Rice</p></a>
                    </li>
                </ul>
        </div>
        )
    }
}

export default SideNav;