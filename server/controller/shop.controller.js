import Stripe from 'stripe'
import config from '../../config/config';
import { sql } from '../../Model/db';

// let stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
// let stripe = Stripe(config.stripTestKey);
let stripe = Stripe(config.stripeSecretKey);

let calculateOrderAmount = items => {
    console.log('clac order amoutn :', items.checkoutDetails.total)

    let total = items.checkoutDetails.total;
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return total * 100;
    // return 1400;
    // return items.checkoutDetails.total;

};
const PaymentIntent = async function (req, res) {
    // Tracks the customers payment lifecycle, keeping track of any failed payment attempts
    // and ensuring the customer is only charged once.

    //Return the PaymentIntents client secret in the response to finish the payment on the client.

    // const { items } = req.body;
    const items = req.body;
    console.log(req.body);
    // 4242 4242 4242 4242
    console.log('payment item detail: ', items)
    const paymentIntent = await stripe.paymentIntents.create({
        // amount: 99,
        // amount: 99,
        amount: calculateOrderAmount(items),
        // amount: items.checkoutDetails.total,
        currency: "usd",
        // payment_method_types: [
        //     "giropay",
        //     "eps",
        //     "p24",
        //     "sofort",
        //     "sepa_debit",
        //     "card",
        //     "bancontact",
        //     "ideal",
        // ],
        // charges: {
        //     object: "list",
        //     data: items,
        // }
        // items: items,
    });

    //     const order = sql`
    //     INSERT INTO orders (
    //     customer_name,
    //     customer_email,
    //     country,
    //     address,
    //     city,
    //     zip,
    //     state,
    //     country,
    //     phoneNumber

    //     )
    //     VALUES (

    //     )
    // `



    res.send({
        clientSecret: paymentIntent.client_secret
    });
};

const productByID = async (req, res, next, id) => {

    try {
        // let product = await sql`
        // SELECT * FROM product
        // WHERE product_uuid=${id} 
        // `;
        let product = await sql`
        SELECT * FROM product    
            INNER JOIN product_images 
                ON product.product_uuid = product_images.product_id 
                WHERE product_id = ${id}
        `;
        if (!product)
            return res.status('400').json({
                error: 'Product not found!'
            });

        //image table
        // let img_table = await sql`
        // SELECT * FROM product_images
        //     WHERE product_id=${id}`;

        // console.log(`img tble:`, img_table);

        req.product = product;
        // req.imgs = img_table;

        // console.log({ product: req.product, imgs: req.imgs })

        console.log('product id: ', product);
        next();
    } catch (e) {
        console.error(e);
        return res.status('400').json({
            error: 'Could not retrieve product'
        });
    };
};

const readProduct = (req, res) => {
    return res.json(req.product);
}

const newProduct = async (req, res, next) => {

    const { product_name, product_price } = req.body;

    let product_uuid = await sql`
    SELECT uuid_generate_v4()
    `;
    console.log('post-uuid: ', product_uuid);

    console.log(req.files, req.body)

    console.log('req.files', req.files[1].path)
    let arr = [];

    let str = req.files[1].path.replace(/public/gi, "");

    // console.log('replaced: ', str);

    // for (let i in req.files) {
    //     let str = req.files[i].path.replace(/public/gi, "");

    //     console.log('replace: ', str);
    // }

    try {

        await sql`
        INSERT INTO product(
            product_uuid,
            product_name,
            product_price,
            default_image
        )
        VALUES(
            ${product_uuid[0].uuid_generate_v4},
            ${product_name},
            ${product_price},
            ${req.files[0].path.replace(/public/gi, "")}
        )
        returning *
       `.then((data) => {
            req.product = data;
            console.log('Post Added Succesfully! : ', data);
        });

        for (let i in req.files) {

            let image_uuida = await sql`
             SELECT uuid_generate_v4()
            `;

            // ${req.files[i].path},

            await sql`
            INSERT INTO product_images(image_uuid, image_name, image_path, product_id)
                VALUES (
                    ${image_uuida[0].uuid_generate_v4},
                    ${req.files[i].filename},
                    ${req.files[i].path.replace(/public/gi, "")},
                    ${product_uuid[0].uuid_generate_v4}
                    )
            returning *
            `.then((data) => {

                arr.push(data)
                console.log(arr)
                req.imgs = arr
                console.log('Uploaded an img!! : ', data)
            });



        };
        console.log('************ ALL IMAGES HAVE BEEN UPLOADED ! ************ ');

        // console.log('imgs', req.imgs[0][0].image_name);
        console.log('imgs', { imgs: req.imgs, product: req.product });
        return res.status(200).json({ Images: req.imgs, product: req.product });
    } catch (e) {
        console.error(e);
        return res.status(400).json(e);
    }


};

const AllProducts = async (req, res, next) => {

    try {
        const all_products = await sql`
            SELECT * FROM product;
        `;
        console.log('all products: ', all_products);
        res.status(200).json(all_products);
    } catch (e) {
        console.error(e);
        next(e);
    }
};

export default {
    PaymentIntent,
    productByID,
    readProduct,
    newProduct,
    AllProducts,
}