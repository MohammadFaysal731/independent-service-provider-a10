import { signOut } from 'firebase/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logoes/strong-gym-logo.png';
const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user)
    const handleSingOut = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/home" >
                    <img className='rounded-circle mx-2' src={logo} alt="" />
                    STRONG GYM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="home#services">SERVICES</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                        <Nav.Link as={Link} to="/aboutMe">ABOUT ME</Nav.Link>
                        {
                            user ?
                                <span className='d-flex justify-content-center align-self-center'>
                                    <button onClick={handleSingOut} className='btn btn-link text-white text-decoration-none'>Sing Out</button>
                                    <span className='text-white me-2'>{user?.displayName && user?.displayName}</span>
                                    <img style={{ width: '35px' }} className='rounded-circle ' src={user?.photoURL && user?.photoURL} alt="" />
                                </span>
                                : <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};

export default Header;