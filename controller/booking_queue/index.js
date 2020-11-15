const { createInfPatient } = require('../../model/create_inf_patient/index');
const { updateInfPatient } = require('../../model/update_inf_patient/index');
const { createInfHealth } = require('../../model/create_inf_health/index');
const { v4: uuidv4 } = require('uuid');

const bookingQueue = async(req,res,_next) => {
    const data = req.body
    const id_patient = uuidv4();
    const id_health = uuidv4();
    ///connect Models
    await createInfPatient(data, id_patient);
    await updateInfPatient(data, id_patient);
    await createInfHealth(data, id_health, id_patient);
    res.json("สำเร็จ");
    return;
}

exports.bookingQueue = bookingQueue;