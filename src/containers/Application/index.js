import React from "react";

import {Navbar, NavItem, Nav, NavDropdown, MenuItem, Image} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

import Blog from '../../components/Blog';

import vkIcon from './images/vk.png';
import ghIcon from './images/gh.png';

import style from './style.css';

import Projects from "../../store/Projects.json";

export default class Application extends React.Component {
    render() {
        return (<div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <LinkContainer to="/"><Navbar.Link>Моё портфолио</Navbar.Link></LinkContainer>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/about">
                            <NavItem eventKey={1}>Об мне</NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={2} title="Проекты">
                            <LinkContainer to="/projects">
                                <MenuItem eventKey={2.1}>Все проекты</MenuItem>
                            </LinkContainer>
                            <MenuItem divider />
                            {Projects.data.map(function(item, index) {
                                return <LinkContainer to={item.url} key={index}>
                                    <MenuItem>{item.title}</MenuItem>
                                    </LinkContainer>
                            })}
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <Navbar.Link href="http://vk.com/spoki4">
                            <Image src={vkIcon} className={style.icon}/>
                        </Navbar.Link>
                        <Navbar.Link href="http://github.com/spoki4">
                            <Image src={ghIcon} className={style.icon}/>
                        </Navbar.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {this.props.children || <Blog />}
        </div>);
    }
}