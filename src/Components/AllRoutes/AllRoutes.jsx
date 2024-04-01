import Details from "../Context/Details";
import Help from "../Context/Help";
import Home from "../Context/Home";
import Login from "../Context/Login";
import Products from "../Context/Products";
import Profile from "../Context/Profile";
import { Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from './PageNotFound'
import { useContext } from "react";
import { AuthContext } from "../Context/Auth";
import Protected from "./Protected";

const AllRoutes = () => {
    const { loggedIn } = useContext(AuthContext)
    return (
        <div>
            <Routes>
                <Route path='/' element={loggedIn ? <Home /> : <Login />} />
                <Route path='/profile' element={<Protected><Profile /></Protected>} />
                <Route path='/product' element={<Protected><Products /></Protected>} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/help' element={<Protected><Help /></Protected>} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;