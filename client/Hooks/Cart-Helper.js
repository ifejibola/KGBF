import { useState, useEffect } from "react";
import { calculateTax } from './tax'


export const useCart = (initialItems = null) => {
    const [items, setItems] = useState(initialItems);
    const [totalItems, setTotalItems] = useState(0);
    const [totalItemCost, setTotalCost] = useState(0);
    const [tax, setTax] = useState(0);

    useEffect(() => {
        const preTax = calcTotalCost()
        // const tax$ = calculateTax(preTax).subscribe(
        //     (calcTax) => setTax(calcTax)
        // )
        // const taxes = calculateTax(preTax);
        // calcTotalItems();
        // console.log('taxess:::', taxes)
        // totalItems.subscribe();
        // return tax$.unsubscribe()
        // console.log('total state changed!')
    }, [totalItems]);


    useEffect(() => {
        // const preTax = calcPreTaxCost()
        // const tax$ = calculateTax(preTax).subscribe(

        // )
        console.log('items state changed!')
        // calcTotalCost()

    }, [items]);


    const addOne = (product, cb) => {
        let cart = [];

        if (typeof window !== "undefined") {
            console.log('window is not undefined! ')
            if (localStorage.getItem('cart')) {

                console.log('i am active')
                cart = JSON.parse(localStorage.getItem('cart'))
                setItems(JSON.stringify(cart))

            };
            product.quantity = 1
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart))
            setItems(JSON.stringify(cart))
            cb()
        };

    };

    const getCart = () => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                return JSON.parse(localStorage.getItem('cart'))
            }
        }
        return []
    };

    const updateCart = (itemIndex, quantity) => {
        let cart = []
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            };
            cart[itemIndex].quantity = quantity
            localStorage.setItem('cart', JSON.stringify(cart))
            setItems(JSON.stringify(cart))

        }
    };

    const removeItem = (itemToRemove) => {
        if (itemToRemove.quantity === 1) {
            setItems([
                ...items.filter((item) => item.name === itemToRemove.name)
            ])
        } else {
            itemToRemove.quantity -= 1
            setItems([
                ...items.filter((item) => item.name !== itemToRemove.name),
                itemToRemove
            ])
        }
    }

    const deleteCartItem = (itemIndex) => {
        let cart = []

        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'))
            }
            cart.splice(itemIndex, 1)
            localStorage.setItem('cart', JSON.stringify(cart));
            setItems(JSON.stringify(cart))
        }
        return cart;
    };

    const setCheckOut = (boolValue) => {
        return boolValue;
    };

    const checkForItems = () => {
        // return !!(getCart() && getCart().length > 0)
        return !!(items && items.length > 0)
    }

    const totalCartItems = () => {
        if (typeof window !== "undefined") {
            if (localStorage.getItem('cart')) {
                return JSON.parse(localStorage.getItem('cart')).length;
            }
        }
        return 0;
    }

    //CHECK IF ITEMS HAS AN ARRAY OF VALUES && CALCULATE TOTAL NUMBER OF ITEMS
    const calcTotalItems = () => {
        if (checkForItems()) {
            if (typeof window !== "undefined") {
                if (localStorage.getItem('cart')) {
                    console.log('total: ', JSON.parse(localStorage.getItem('cart')).length)
                    return setTotalItems(JSON.parse(localStorage.getItem('cart')).length);
                }
            }
            // setTotalItems(
            //     items.reduce((acc, item) => acc + item.quantity, 0)
            // )
        } else {
            setTotalItems(0)
        }
    }

    const calcPreTaxCost = () => {
        if (checkForItems()) {
            return items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        } else {
            return 0
        }
    }

    const calcTotalCost = () => {


        // return getCart().reduce((a, b) => {
        //     return a + (b.quantity * b.price)
        // }, 0);

        // if (checkForItems()) {
        // const preTax = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)
        // const preTax = getCart().reduce((a, b) => {
        //     return a + (b.quantity * b.price)
        // }, 0);
        // const total = preTax + tax
        // const total = getCart();
        console.log('total getcart:', getCart());

        return getCart().reduce((a, b) => {
            // setTotalCost((a + (b.quantity * b.price)))
            return a + (b.quantity * b.price)
        }, 0);


        // setTotalCost(items)
        // } else {
        //     setTotalCost(0)
        // }
    }

    const empty = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem('cart')
            // cb()
        }
    }
    return [
        items,
        totalItems,
        totalItemCost,
        tax,
        addOne,
        getCart,
        updateCart,
        removeItem,
        totalCartItems,
        calcTotalCost,
        // calcTotalItems,
        deleteCartItem,
        setCheckOut,
        empty
    ]
};