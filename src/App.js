/** @format */

import Books from './components/Books/Books.component';
import NavBar from './components/NavBar/NavBar.component';
import AddBook from './pages/AddBooks/AddBooks.page';
import Login from './pages/Auth/Login/Login.Pages';
import Register from './pages/Auth/Register/Reg.Pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function App() {
	const user = true;
	return (
		<Router>
			<NavBar />
			<div className='App bg-gray-50'>
				<Routes>
					<Route path='/' element={<Books />} />
					<Route path='/addbook' element={<AddBook />} />
					<Route
						path='/login'
						element={user ? <Navigate to='/' /> : <Login />}
					/>
					<Route
						path='/register'
						element={user ? <Navigate to='/login' /> : <Register />}
					/>
					{/* <h1 className='font-bold text-center text-4xl py-10'>Bookist</h1> */}
					{/* <Books /> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
