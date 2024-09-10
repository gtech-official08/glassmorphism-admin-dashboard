import React from 'react'
import Layout from '../components/layout/Layout'
import { Routes, Route } from 'react-router-dom';
import SecondaryNav from '../components/navbar/secondaryNav/SecondaryNav'
import Dashboard from './dashboard/Dashboard';

const Page = () => {
    return (
        <Layout className="space-y-6">
            {/* Secondary Navbar */}
            <SecondaryNav />

            {/* Routing or content */}
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>


        </Layout>
    )
}

export default Page