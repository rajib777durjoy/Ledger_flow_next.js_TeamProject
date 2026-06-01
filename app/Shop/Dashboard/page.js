import React from 'react';
import StaticPage from './Static/page';
import ProductsPage from './ProductsPage/page';

const Dashboard = () => {
    return (
        <div>
           <StaticPage></StaticPage>
           <ProductsPage></ProductsPage>
        </div>
    );
};

export default Dashboard;