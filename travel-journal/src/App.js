import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import locationData from './components/Locations';

function App() {
    const locElement = locationData.map(location => {
        return (
            <Card 
                img = {location.img}
                country = {location.country}
                mapLink = {location.mapLink}
                place = {location.place}
                startDate = {location.startDate}
                endDate = {location.endDate}
                description = {location.description}
            />
        ) 
    })
    return (
        <div className="App">
            <Header />
            {locElement}
        </div>
    );
}

export default App;