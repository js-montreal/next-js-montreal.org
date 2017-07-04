import Link from 'next/link';

const Header = () => (
    <ul>
        <li><Link href='/'><a>Home</a></Link></li>
        <li><Link href='/presenter'><a>Be a presenter</a></Link></li>
        <li><Link href='/archive'><a>Archive</a></Link></li>
    </ul>
);

export default Header;
