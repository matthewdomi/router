
//GET
const getUsers = (req, res) => {
    res.status(200).send("Welcome to my server");
};

//POST
const createUser = (req, res) => {
    res.status(201).send("Your data has been saved");
};

//PATCH, PUT
const updateUser= (req, res) => {
    res.status(200).send("Your data has been updated");
};

//DELETE
const deleteUser = (req, res) => {
    res.status(200).send("Your data has been deleted");
};


module.exports ={
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};