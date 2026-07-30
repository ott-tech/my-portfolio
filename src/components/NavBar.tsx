import './NavBar.css';

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">DevPortfolio</div>
            <ul className="nav-links">
                <li className="nav-item"><a href="#projects">Work</a></li>
                <li className="nav-item"><a href="#home">Home</a></li>
                <li className="nav-item"><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}