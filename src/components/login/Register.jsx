import React from 'react';
import loginImg from '../../login.svg';

export class Register extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className='base-container'>
        <div className='header'></div>
        <div className='content'>
          <div className='image'>
            <img src='loginImg ' alt='' />
          </div>
          <div className='from'>
            <div className='from-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' name='password' placeholder='username ' />
            </div>
            <div className='from-group'>
              <label htmlFor='username'>username</label>
              <input type='text' name='username' placeholder='username ' />
            </div>
            <div className='from-group'>
              <label htmlFor='username'>Password</label>
              <input type='password' name='password' placeholder='username ' />
            </div>
          </div>
        </div>
        <div className='footer'>
          <button type='button' className='btn'>
            Login
          </button>
        </div>
      </div>
    );
  }
}
