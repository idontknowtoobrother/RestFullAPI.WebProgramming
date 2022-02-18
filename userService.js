let usersData = require('./users.json'); // Pull data from user.js

// Check email and password then return index(Id) of data
getUserId = (email, password) => {
    let id = usersData.findIndex((val) => { // หา Index จาก array users
        return val.password == password.toString() && val.email == email;
    });
    
    return id;
}

// Get user by index(Id)
getUserById = (id) => {
    return usersData[id]
}