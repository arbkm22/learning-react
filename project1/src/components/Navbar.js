import logo from './logo192.png';

function Navbar(props) {
    console.log('props: ', props.mode);
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={logo} alt="React Logo"/>
                <h1>ReactFacts</h1>
            </div>
            <div className="toggler">
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider" 
                    onClick={props.handleClick}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </div>
    )
}

export default Navbar;