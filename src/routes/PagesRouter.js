import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout';

import Home from '../pages/Home';
import About from '../pages/About';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import NoPage from '../pages/NoPage';

export default function PagesRouter() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/blogs" element={<Blogs />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
