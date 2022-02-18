let usersData = require('./users.json'); // สร้างตัวแปรข้อมูลจำลอง

getUserPosition = (email, password) => {
    const passowrd = password.toString()
    usersData.findIndex((val) => { // หา Index จาก array users
        return val.password == passowrd && val.email == email;
    });
    return -1;
}

getUserById = (id) => {
    return usersData[id]
}