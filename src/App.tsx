import React from 'react'
import './App.css'

function App() {
	// const names = ['Sveta', 'Kat', 'Dima', 'Victor']
	// const liElements = names.map(n => <li>{n}</li>)

	const users = [
		{ id: 1, name: 'Dima' },
		{ id: 2, name: 'Kat' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Victor' },
	]

	// отобразить порядковый номер
	// const liElements = users.map((u, index) => (
	// 	<li>
	// 		{index} - {u.name}
	// 	</li>
	// ))

	const liElements = users.map(u => <li key={u.id}>{u.name}</li>)

	return (
		<div className='App'>
			<ul>{liElements}</ul>
		</div>
	)
}

export default App
