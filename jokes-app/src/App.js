import './App.css';
import Jokes from './components/Jokes';
import jokesList from './components/jokesData';

function App() {
    const jokeElements = jokesList.map(joke => {
        return <Jokes setup={joke.setup} punchline={joke.punchline} />
    });

  return (
    <div>
        {jokeElements}
    </div>
  );
}

export default App;
