const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
let users = require('./user.json'); // สร้างตัวแปรข้อมูลจำลอง
let server = express();
server.use(bodyParser.json()); // ให้ server(express) ใช้งานการ parse json
server.use(morgan('dev')); // ให้ server(express) ใช้งานการ morgam module
server.use(cors()); // ให้ server(express) ใช้งานการ cors module
server.use(bodyParser.urlencoded({
    extended: true
})) // แปลงข้อมูลที่ส่งมาจากฟอร์ม
server.use(express.static('public'));
server.set('views', __dirname + '/public'); // ระบุตำแหน่งของไฟล์ html
server.engine('html', require('ejs').renderFile);

server.listen(3000, function () {
    console.log('Server Listen at http://localhost:3000');
});

server.get('/', function (req, res) {
    res.sendFile(__dirname + "/public/" + "login.html");
})

server.post('/login', function (req, res) {
    const email = req.body.email; // รับค่าจาก body ที่ส่งมาทาง client จาก tag ที่ชื่อว่า "email"
    const password = req.body.pass; // รับค่าจาก body ที่ส่งมาทาง client จาก tag ที่ชื่อว่า "pass"
    const position = users.findIndex((val) => { // หา Index จาก array users
        return val.password == password.toString();
    });
    // ตรวจสอบข้อมูลว่ามีในฐานข้อมูลหรือไม่
    if (position == -1) {
        res.render('nonmember.html');
    } else {
        response = users[position];
        res.render('member.html', {
            name: response.name,
            age: response.age,
            movie: response.movie,
            email: response.email
        });
    }
})