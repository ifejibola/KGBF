
CREATE TABLE product (
    product_uuid UUID NOT NULL PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    product_price DECIMAL NOT NULL,
    default_image VARCHAR(100) NOT NULL
);

CREATE TABLE product_images(
    image_uuid UUID NOT NULL PRIMARY KEY,
    image_name VARCHAR(100) NOT NULL,
    image_path VARCHAR(100) NOT NULL,
    product_id UUID REFERENCES product(product_uuid)
);

CREATE TABLE orders(
    order_id UUID NOT NULL PRIMARY KEY,
    customer_name VARCHAR(100) NOT NULL,
    customer_email VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    customer_street VARCHAR(100) NOT NULL,
    city VARCHAR(100) NOT NULL,
    zip VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(50) NOT NULL,
    product_id UUID REFERENCES product(product_uuid)

);