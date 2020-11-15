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

const createInfHealth = (data, id_health, id_patient) =>{
  return new Promise((resolve,reject) => {
    const sql = "INSERT INTO inf_health (`id_health`, `height`, `weight`, `temperature`, `pressure`, `pulse`, `disease`, `id_patient`)" + 
    ` VALUES ('${id_health}', '${data.height}', '${data.weight}', '${data.temperature}', 
    '${data.pressure}', '${data.pulse}', '${data.disease}', '${id_patient}')`;
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
exports.createInfHealth = createInfHealth;