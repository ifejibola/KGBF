import React from 'react'
import { renderRoutes } from 'react-router-config'

import Menu from './pages/NavBar';

//
// import MenuNav from './Component/MenuNav'
import Footer from './Component/Footer'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
// const promise = loadStripe('pk_test_A7jK4iCYHL045qgjjfzAfPxu');
const promise = loadStripe('pk_test_51IFiczICzvX2SDBYrXj4LoYOkxLtH2yDUdRbD9K5nlUJgRYZQtoCG7EVtMArAgFgMT6ILX65nTcJyvpIgCPODlJL00cvV3KCvx');

console.log(promise)

function App({ route }) {

    // console.log('APP({props}): ', route);
    return (
        <Elements stripe={promise}>
            <Menu />
            {renderRoutes(route.routes)}
            <Footer />

        </Elements>
    )
}

export default {
    component: App,
    // loadData: ({ dispatch }) => dispatch({ test: 'test obj' })
};
