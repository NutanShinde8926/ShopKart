import React, { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault() // stop page reload

    // demo check only - real apps verify on a server
    if (email === 'nutan@gmail.com' && password === '1234') {
      setMessage('Login successful!')
    } else {
      setMessage('Invalid email or password.')
    }
  }

  return (
    <div className='loginbg'>
      <div className="loginpage">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label><br />
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <label htmlFor="password">Password</label><br />
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Login</button>
      </form>

      <p>{message}</p>
      </div>
    </div>
  )
}

export default Login