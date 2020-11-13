const { createQueue } = require('../../model/create_queue/index');

const bookingQueue = async(req,res,_next) => {
    // const data = req.body

    ///connect Models
    await createQueue();
    res.json("สำเร็จ");
    return;
}

exports.bookingQueue = bookingQueue;