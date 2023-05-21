import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './../Screens/Homepage'
import GuestPage from '../Screens'
import UserDashboard from '../Components/UserManagement'
import SignUp from '../Screens/Authentication/Signup'
import Login from '../Screens/Authentication/Login'

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<GuestPage />} />
                <Route path='dashboard' element={<Homepage />} />
                <Route path='users' element={<UserDashboard />} />
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter