import img from './../assets/pp.jpg';

function Info() {
    return (
        <div className="info--main">
            <img src={img} className="info--pp" alt="pp"></img>
            <div className="info--header">
                <h2>Bhaskar Mahto</h2>
                <h3>Frontent Developer</h3>
                <h4>arbkm22.github.com</h4>
            </div>
            <div className="info--buttons">
                <button className="info--button-main info--button1"><i class="fa fa-envelope"></i>Email</button>
                <button className="info--button-main info--button2"><i class="fa fa-linkedin"></i>LinkedIn</button>
            </div>
        </div>
    )
}

export default Info;