import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import data from './data';

function App() {
    const cardElement = data.map(card => {
        return <Cards
            key={card.id}
            card={card}
        />
    });
    return (
        <div>
        <Navbar />
        <div className="container">
            <Hero />
            <section className="cards--list">
                {cardElement}
            </section>
        </div>      
        </div>
    );
}

export default App;


const nums = [1, 2, 3, 4, 5];
const numsDoubled = nums.map(function(item) {
    return item*item;
});
console.log(numsDoubled);

const names = ['alice', 'bob', 'charlie', 'danielle'];
const namesCaps = names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
});
console.log(namesCaps);

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];
const pokes = pokemon.map(mon => {
    return `<p>${mon}</p>`;
});
console.log(pokes);