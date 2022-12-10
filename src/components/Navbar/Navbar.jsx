import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget/CartWidget';
import "./Navbar.css";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";


export default function CollapsibleExample(props) {
  const { pages } = props;

  return (
    <Navbar collapseOnSelect expand="lg" className='navbarra' variant="light" >
      <Container>

        <Navbar.Brand href="/Home" className='nav__logo'>
          <img
              alt=""
              src={logo}
              width="auto"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Tienda Aterrizar 
            </Navbar.Brand>      

         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <ul className="me-auto ">
          {pages.map((page) => (
            <li key={`${page.id}-page`}>
              <NavLink
                to={page.id}
                className={({ isActive  }) =>
                  isActive ? "link is-active" : "link"
                }
              >
                {page.name}
              </NavLink>
            </li>
        ))}
      </ul>

        </Navbar.Collapse>
        <CartWidget></CartWidget>
      </Container>
    </Navbar>
    
  );
}
