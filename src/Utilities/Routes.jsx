import React from 'react'
import { Route, Routes } from "react-router-dom"
import Homepage from "../Screens/Homepage/index"
import Login from '../Screens/Authentication/Login'
import SignUp from '../Screens/Authentication/Signup'


// Authentication page Routes
export const LoginRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}


// Homepage Routes
export const HomeRoutes = () => {
    return (
        <Routes>
            <Route path="/homepage" element={<Homepage />} />
        </Routes>
    )
}