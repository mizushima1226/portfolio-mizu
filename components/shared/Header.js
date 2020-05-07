import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
	render() {
		return (
			<>
				<p className="customClass">I am styled P element</p>
				<p className="customClassFromFile">I am styled P element</p>
				<Link href="/">
					<a> Home </a>
				</Link>
				<Link href="/about">
					<a> About </a>
				</Link>
				<Link href="/portfolio">
					<a> Portfolio </a>
				</Link>
				<Link href="/blogs">
					<a> Blogs </a>
				</Link>
				<Link href="/cv">
					<a> Cv </a>
				</Link>
				<style jsx>{``}</style>
			</>
		);
	}
}

export default Header;
