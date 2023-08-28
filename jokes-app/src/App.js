import { useState } from 'react';
import './App.css';
import Jokes from './components/Jokes';
import jokesList from './components/jokesData';

function App() {
    const jokeElements = jokesList.map(joke => {
        return <Jokes setup={joke.setup} punchline={joke.punchline} />
    });

    const [messages, setMessages] = useState(['a', 'b']);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        comments: '',
        isFriendly: true
    });

    console.log('isFriendly: ', formData.isFriendly);

    console.log('formdata: ', formData);

    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefaults();
        console.log('formData: ', formData);
    }

  return (
    <div>
        {jokeElements}
        {messages.length > 0 ? `You have ${messages.length} unread ${messages.length == 1 ? 'message' : 'messages'}` : `You're all caught up`}
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="First Name"
                onChange={handleChange}   
                name='firstName'
                value={formData.firstName}
            />
            <input 
                type="text"
                placeholder='Last Name'
                onChange={handleChange}
                name='lastName'
                value={formData.lastName}
            />
            <input 
                type="email"
                placeholder='Email'
                onChange={handleChange}
                name='email'
                value={formData.email}
            />
            <textarea 
                placeholder='Comments?'
                name='comments'
                value={formData.comments}
                onChange={handleChange}
            />
            <input 
                type='checkbox'
                checked={formData.isFriendly}
                onChange={handleChange}
                name='isFriendly'
                id='isFriendly'
            />
            <label htmlFor='isFriendly'>Are you friendly?</label> 
            <br />
            <br />

            <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
