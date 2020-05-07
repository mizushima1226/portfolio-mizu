import React from 'react';
import Link from 'next/link';

class Header extends React.Component {
	render() {
		return (
			<>
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
