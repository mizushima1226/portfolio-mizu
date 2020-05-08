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

const BsNavLink = props => {
	const { route, title } = props;
	return (
		<Link href={route}>
			<a className="port-navbar-link"> {title} </a>
		</Link>
	);
};

const Example = props => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

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
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default Example;
