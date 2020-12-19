import React from 'react';
import { Nav } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy'


class NavBar extends React.Component{

    render() {
        return ( 
            <div className="container-fluid">
                <Nav justify variant="tabs" defaultActiveKey="/products" style={{fontSize: '15px'}}>
                        <Nav.Link href="#sushi" className="focus">
                            Sushi
                        </Nav.Link>
                        <Nav.Link href="#maki">
                            Maki
                        </Nav.Link>
                        <Nav.Link href="#temaki">
                            Temaki
                        </Nav.Link>
                        <Nav.Link href="#ramen">
                            Ramen
                        </Nav.Link>
                        <Nav.Link href="#don" style={{borderRight: 'none'}}>
                            Don
                        </Nav.Link>
                </Nav>
            </div>
   
        )
    }
}

export default NavBar;

{/* <Scrollspy 
className="scrollspy" items={ ['sushi','maki','temaki','ramen','don']}
currentClassName="isCurrent">

<a href="#sushi" defaultChecked>
    <span>Sushi</span>
</a>

<a href="#maki">
    <span>Maki</span>
</a>

<a href="#temaki">
    <span>Temaki</span>
</a>

<a href="#ramen">
    <span>Ramen</span>
</a>

<a href="#don">
    <span>Don</span>
</a>

</Scrollspy> */}