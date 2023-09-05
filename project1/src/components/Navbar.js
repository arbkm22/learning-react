import logo from './logo192.png';

function Navbar(props) {
    return (
        <nav 
            className={props.mode ? "dark": ""}
        >
            <img 
                className="nav--logo_icon"
                src={logo}
            />
            <h3 className="nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                {/* <div 
                    className="toggler--slider"
                    onClick={props.handleClick}
                >
                    <div className="toggler--slider--circle"></div>
                </div> */}
                <div className='slider'>
                    <input type='checkbox' checked={props.mode} onChange={props.handleClick} id="slider-button" />
                    <label for="slider-button" className={props.mode ? "dark" : ""} ></label>
                </div>

                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}

export default Navbar;