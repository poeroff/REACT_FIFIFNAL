const express = require("express");
const app = express();
const sequelize = require("./util/database");
const cors = require('cors');
require("dotenv").config()



app.use(cors());
app.use(express.json());

const mainpageRoutes = require("./router/mainpage");
const userRoutes = require("./router/user")
app.use(mainpageRoutes);
app.use(userRoutes)


app.use((error ,req,res,next)=>{
  const status = error.statusCode || 500
  const meesage = error.message;
  const data  = error.data
  res.status(status).json({message : meesage , data : data})
})





sequelize.sync().then(result => {
    console.log("2000번 포트에 연결이 성공되었습니다")
  app.listen(2000);
}).catch(err=>{
  console.log(err);
})

// MySQL 연결 정보
// const db = mysql.createConnection({
//   host: 'docker.zepinos.com',
//   port: 13306, // MySQL 서버의 포트 번호
//   user: 'sakura',
//   password: 'sakura12#$',
//   database: 'sakura'
// });

// // MySQL 연결
// db.connect((err) => {
//   if (err) {
//     console.error('MySQL 연결 오류: ' + err.stack);
//     return;
//   }
//   console.log('MySQL에 성공적으로 연결되었습니다.');
//   db.query('SELECT * from category', (queryErr, results) => {
//     if (queryErr) {
//       console.error('테스트 쿼리 실행 오류: ' + queryErr);
//     } else {
//       const message = results;
//       console.log('테스트 쿼리 결과:', message);
//     }
//   });
// });

// // MySQL 'error' 이벤트 리스너 추가
// db.on('error', (err) => {
//   console.error('MySQL 오류: ' + err);
// });

// // Express route to execute the SQL query
// app.get('/categories', (req, res) => {
//   const query = 'SELECT * FROM category';

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('쿼리 오류: ' + err);
//       res.status(500).send('데이터베이스 오류');
//     } else {
//       res.json(results);
//     }
//   });
// });
