const User = require('../Models/User');





//
// exports.createUser = async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//
//         // Create a new user instance based on the data received in the request body
//         const newUser = new User({
//             username,
//             email,
//             password,
//         });
//
//         // Save the new user to the database
//         const savedUser = await newUser.save();
//
//         // Respond with the saved user in the JSON response
//         res.json(savedUser);
//     } catch (err) {
//         // If there's an error, handle it and send an error response with status code 500
//         console.error(err);
//         res.status(500).json({ error: 'Error creating user' });
//     }
// };

//-------------------------------------
//Register
//-------------------------------------

exports.createUser = async (req, res) => {

    //Check if user Exist
    const userExists = await User.findOne({ email: req?.body?.email });

    if (userExists) throw new Error("User already exists");
    try {
        //Register user
        const user = await User.create({
            username: req?.body?.username,
            email: req?.body?.email,
            password: req?.body?.password,
        });
        res.json(user);
    } catch (error) {
        res.json(error);
    }
};


//-------------------------------
//Login user
//-------------------------------

exports.createUserLogin = async (req, res) => {
    //check if user exists
    const user = await User.findOne({ email: req?.body?.email, password: req?.body?.password });
    if (!user) {
        throw new Error(`Login credentials are not valid`);
    }
    res.json("user login");
};
