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

const updateInfPatient = (data, id) =>{
  return new Promise((resolve,reject) => {
    const sql = "UPDATE `inf_patient` SET `use_service` = " + `'${data.use_service}' WHERE` + "`inf_patient`.`id` = " + `'${id}';`;
    
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
exports.updateInfPatient = updateInfPatient;