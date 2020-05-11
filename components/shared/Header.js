import React, { useState } from 'react';
import Link from 'next/link';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem
} from 'reactstrap';

import auth0 from '../../services/auth0';

const BsNavLink = props => {
	const { route, title } = props;
	return (
		<Link href={route}>
			<a className="port-navbar-link"> {title} </a>
		</Link>
	);
};

const Login = () => {
	return (
		<span className=" port-navbar-link clickable" onClick={auth0.login}>
			Login
		</span>
	);
};

const Logout = () => {
	return (
		<span className="port-navbar-link clickable" onClick={auth0.logout}>
			Logout
		</span>
	);
};

const Header = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	const { isAuthenticated, user } = props;
	return (
		<div>
			<Navbar
				className="port-navbar port-default absolute"
				style={{ position: 'absolute' }}
				color="transparent"
				light
				expand="md"
			>
				<NavbarBrand className="port-navbar-brand" href="/">
					Mizu
				</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem className="port-navbar-item">
							<BsNavLink route="/" title="Home" />
						</NavItem>
						<NavItem className="port-navbar-item">
							<BsNavLink route="/about" title="About" />
						</NavItem>
						<NavItem className="port-navbar-item">
							<BsNavLink route="/portfolios" title="Portfolio" />
						</NavItem>
						<NavItem className="port-navbar-item">
							<BsNavLink route="/blogs" title="Blog" />
						</NavItem>
						<NavItem className="port-navbar-item">
							<BsNavLink route="/cv" title="Cv" />
						</NavItem>
						{!isAuthenticated && (
							<NavItem className="port-navbar-item">
								<Login />
							</NavItem>
						)}
						{isAuthenticated && (
							<NavItem className="port-navbar-item">
								<Logout />
							</NavItem>
						)}
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Header;
