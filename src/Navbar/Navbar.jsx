import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import SignUp from './Contact/SignUp';
import ErrorPage from './ErrorPage';
import Gallery from './Gallery/Gallery';
import Index from './Home/Index';
import Menu from './Home/Menu';
import SampleQuesPaper from './Work/SampleQuesPaper';
import Work from './Work/Work';




const Navbar = () => {
    return (
    <>
    <Menu/>
        <Routes>
            <Route index path='/' element={<Index/>}/>
            <Route  path='/work' element={<Work/>}/>
            <Route index path='/gallery' element={<Gallery/>}/>
            <Route index path='/contact' element={<Contact/>}/>
            <Route index path='/signup' element={<SignUp/>}/>
            <Route index path='/work/:samplepaper' element={<SampleQuesPaper/>}/>
            <Route path='*' element={<ErrorPage/>}/>
           
        </Routes>
    </>
    )
}
export default Navbar;