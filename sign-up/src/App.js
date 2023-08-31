import React, { useState } from 'react'
import './App.css';

function App() {

    const [formData, setFormData] = React.useState({
        email: '',
        password: '',
        cnfpass: '',
        newsletter: false
    })

    function handleChange(event) {
        const {type, name, value, checked} = event.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === 'checkbox' ? checked : value
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('formdata: ', formData);
        if (formData.password === formData.cnfpass)
            console.log('successfully signed up');
        else 
            console.log('passwords do not match');
        if (formData.newsletter)
            console.log('subscribed');
    }

  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
            <div className='BoxCard'>
                <div className='FormInput'>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='email'
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
                <div className='FormInput'>
                    <input
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={handleChange}
                        value={formData.password}
                    />
                </div>
                <div className='FormInput'>
                    <input
                        type='password'
                        name='cnfpass'
                        placeholder='confirm password'
                        onChange={handleChange}
                        value={formData.cnfpass}
                    />
                </div>
                <div className='FormInput'>
                    <div className='CheckBox'>
                        <input
                            type='checkbox'
                            name='newsletter'
                            checked={formData.newsletter}
                            onChange={handleChange}
                            id='newsletter'
                        />
                        <label htmlFor='newsletter'>I want to join the newsletter</label>
                    </div>
                </div>
                <div className='submitButton'>
                    <button>Sign Up</button>
                </div>
            </div>
        </form>
    </div>
  );
}

export default App;
