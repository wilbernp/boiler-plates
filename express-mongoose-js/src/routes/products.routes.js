const { Router } = require("express");
const productsController = require("../controllers/products.controller")

const router = Router()

// POST api/products/
router.post("/", productsController.create)

//GET api/products/
router.get("/", productsController.getAll)

//GET api/products/:id
router.get("/:id", productsController.getById)

//GET api/products/:id
router.put("/:id", productsController.update)

//GET api/products/
router.delete("/:id", productsController.delete)

module.exports = router