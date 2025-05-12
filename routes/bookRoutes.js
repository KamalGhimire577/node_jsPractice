const { fetchBook, addBook } = require("../controllers/bookController")

const router =require("express").Router()// router ko lagi auta method ho

router.route("/book").get(fetchBook).post(addBook)



module.exports=router