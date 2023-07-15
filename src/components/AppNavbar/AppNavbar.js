import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Logo from '../../assets/logos/logo.png';
import AppButton from "../AppButton/AppButton";
import styles from './AppNavbar.module.scss';

const AppNavbar = () => {
    return (
        <Container>
            <Navbar expand="lg" className={styles.Wrapper}>
                <NavLink to="/" className={styles.LogoLink}>
                    <img src={Logo} alt="Logo" className={styles.Logo} />
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <NavLink to="/" className={styles.NavLink} activeClassName={styles.Active}>Home</NavLink>
                        <NavLink to="/some-path" className={styles.NavLink}>Menu</NavLink>
                        <NavLink to="/some-path" className={styles.NavLink}>Stacking</NavLink>
                        <NavLink to="/some-path" className={styles.NavLink}>Exchange</NavLink>
                        <NavLink to="/some-path" className={styles.NavLink}>Infos</NavLink>
                        <AppButton text="Connect to a wallet" styleClasses={[styles.ConnectBtn]} variant="light" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default AppNavbar;
