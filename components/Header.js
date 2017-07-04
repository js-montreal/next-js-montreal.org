import Link from 'next/link';

const Header = () => (
    <nav className="nav">
        <div className="nav-left">
            <Link href='/'><a className="nav-item is-active">Home</a></Link>
            <Link href='/presenter'><a className="nav-item">Be a presenter</a></Link>
            <Link href='/archive'><a className="nav-item">Archive</a></Link>
        </div>
    </nav>
);

export default Header;
