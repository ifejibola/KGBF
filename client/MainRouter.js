import App from './App'
import ComingSoon from './pages/ComingSoon'

import Shop from './pages/Shop';
import SinglePage from './pages/SinglePage';
import NewProductPage from './component/newProduct';
import CheckOutPage from './pages/CheckOutPage';
import Pricing from './component/Pricing';
import All from './pages/AllProducts';


import option from './pages/Option2';
import Stripe from './pages/Stripe';
import NotFoundPage from './pages/NotFoundPage'

export default [
    {
        ...App,
        routes: [
            {
                ...ComingSoon,

                path: '/',
                exact: true
            },
            {
                ...option,
                path: '/home',
            },
            {
                ...All,
                path: '/all',
            },
            {
                ...Shop,
                path: '/shop',
            },
            {
                ...SinglePage,
                path: '/product/:id',
            },
            {
                ...Stripe,
                path: '/checkout',
            },
            {
                ...NewProductPage,
                path: '/new',
            },
            {
                ...Pricing,
                path: '/price',
            },
            {
                ...CheckOutPage,
                path: '/checkoutpage',
            },
            {
                ...NotFoundPage
            }
        ]
    }
]