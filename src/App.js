import React from 'react';
import Navbar from './navbar/Navbar';
import './navbar/Navbar.css';
import Formfield from './formfield/Formfield';
import './formfield/Formfield.css';
import CoolButton from './coolbutton/CoolButton';
import './coolbutton/CoolButton.css';
import Signup from './signup/Signup';
import Message from './message/Message'


const App = () => {
  return (
    <div>
      <Navbar />
      <Formfield label="Name" type="text" placeholder="e.g Alex Smith" />
      <Formfield label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <Signup />
      <Message isInfo title='Hello World'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>.
      </Message>
    </div>
  )
};

export default App;
