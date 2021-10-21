import express from 'express'
import shop from '../controller/shop.controller'
import multer from "multer";
import path from 'path'

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/Uploads/')
    },
    filename: function (req, file, cb) {

        const ext = path.extname(file.originalname);
        console.log(ext);
        console.log('file: ', file.originalname);
        console.log('file: ', file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        console.log(file.fieldname + '-' + uniqueSuffix + ext)
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    },
    limits: '16mb'
});


router.route('/intent')
    .post(shop.PaymentIntent);
router.route('/new')
    .post(upload.array('photo', 3), shop.newProduct);

router.route('/allproducts')
    .get(shop.AllProducts);

router.route('/single/:product_uuid')
    .get(shop.readProduct);
router.param('product_uuid', shop.productByID);

export default router;