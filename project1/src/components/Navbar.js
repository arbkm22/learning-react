import logo from './logo192.png';

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="React Logo"/>
                <h1>ReactFacts</h1>
            </div>
            <h2>React Course - Project 1</h2>
        </div>
    )
}

export default Navbar;