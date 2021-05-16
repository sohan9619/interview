import React, { useState, useContext } from 'react'
import {
    Collapse,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
    NavbarToggler
} from "reactstrap"

import { Link } from "react-router-dom"
import { UserContext } from "../contet/UserContext"

const Header = () => {
    const context = useContext(UserContext)
    const [isOpe, setIsOpen] = useState(false)
    const toggel = () => {
        setIsOpen(!isOpe)
    }

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand><Link to="/" className="text-white">LCO gitfire app</Link></NavbarBrand>
    <NavbarBrand><Link to="/Question1" className="text-white"> Randomeven </Link> </NavbarBrand>
    <NavbarBrand> <NavLink tag={Link} to="/Question2" className="text-white">  consecutive </NavLink></NavbarBrand>
    <NavbarBrand>   <NavLink tag={Link} to="/Question3" className="text-white"> Sort </NavLink></NavbarBrand>
    <NavbarBrand>    <NavLink tag={Link} to="/Question5" className="text-white"> Object</NavLink></NavbarBrand>

                                
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email : " "
            }</NavbarText>
            <NavbarToggler onClick={toggel} />
            <Collapse isOpen={isOpe} navbar>
                <Nav className='ml-auto' >
                    {
                        context.user ? (<NavItem>
                        
                            <NavLink onClick={()=>{context.setUser(null)}} className="text-white">Logout</NavLink>
                        </NavItem>
                        ) : (
                            <>
                                <NavItem>
                                    <NavLink tag={Link} to="/Signup" className="text-white"> Signup  </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to="/Signin" className="text-white"> Signin </NavLink>
                                </NavItem>
                            </>
                        )
                    }



                </Nav>

            </Collapse>
        </Navbar>
    )
}

export default Header;