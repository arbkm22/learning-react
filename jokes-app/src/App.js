import { useState } from 'react';
import './App.css';
import Jokes from './components/Jokes';
import jokesList from './components/jokesData';

function App() {
    const jokeElements = jokesList.map(joke => {
        return <Jokes setup={joke.setup} punchline={joke.punchline} />
    });

    const [messages, setMessages] = useState(['a', 'b']);

  return (
    <div>
        {jokeElements}
        {messages.length > 0 ? `You have ${messages.length} unread ${messages.length == 1 ? 'message' : 'messages'}` : `You're all caught up`}
    </div>
  );
}

export default App;
