import './index.css';
import Info from './components/info';
import About from './components/about';
import Interest from './components/interest';
import Footer from './components/footer';

function App() {
    return (
        <div className="component">
            <div className="component--main">
                <Info />
                <About />
                <Interest />
            </div>            
            <div class="component--footer">
                <Footer />
            </div>            
        </div>
    );
}

export default App;
