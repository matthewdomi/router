const getProducts = (req, res) => {
    res.status(200).send("Get All Product");
};

const createProduct = (req, res) => {
    res.status(200).send("Product has been created");
};

const updateProduct = (req, res) => {
    res.status(200).send("Product has been updated");
};

const deleteProduct = (req, res) => {
    res.status(200).send("Product has been deleted");
};


module.exports = {
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};