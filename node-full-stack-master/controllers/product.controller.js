import Product from '../models/product.model';

export function getProducts(req, res) {
    Product.find((err, products) => {
        res.json(products);
    })
}
