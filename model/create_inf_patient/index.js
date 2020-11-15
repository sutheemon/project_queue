require('dotenv').config()
const mysql = require('mysql')
///connection DB
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT
})

connection.connect()

const createInfPatient = (data, id) =>{
  return new Promise((resolve,reject) => {
    const sql = "INSERT INTO inf_patient (`id`, `Fname`, `Lname`, `email`, `tel`, `birthday`, `idCard`, `sex`, `symptom`)" + 
    ` VALUES ('${id}', '${data.Fname}', '${data.Lname}', '${data.email}', 
    '${data.tel}', '${data.birthday}', '${data.idCard}', '${data.sex}', '${data.symptom}')`;
    
    connection.query(sql, function (err, value) {
        if (err) throw err
        if(value) {
            resolve(value);
          } 
            else {
              reject(err);
            }
        return;
        })
    });
}

///exports function
exports.createInfPatient = createInfPatient;