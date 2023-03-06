import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import axios from 'axios'

axios
	.get('http://localhost:3001/api/notes')
	.then(response => {
		const notes = response.data
		ReactDOM.createRoot(document.getElementById('root')).render(<App />)
	})

const notes = [
	{
		id: 1,
		content: 'HTML is easy',
		important: true
	},
	{
		id: 2,
		content: 'Browser can execute only JavaScript',
		important: false
	},
	{
		id: 3,
		content: 'GET and POST are the most important methods of HTTP protocol',
		important: true
	}
]

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
