const productsService = require("../services/products.service")

module.exports = {
    // POST api/products
    create: async (req, res) =>{
        const response = await productsService.create(req.body)
        res.send(response)
    },

    // GET api/products
    getAll: async (req, res) =>{
        const response = await productsService.getAll()
        res.send(response)
    },

    // GET api/products/:id
    getById: async (req, res) =>{
        const response = await productsService.getById(req.params.id)
        res.send(response)
    },

    // PUT api/products/:id
    update: async (req, res) =>{
        const response = await productsService.update(req.params.id)
        res.send(response)
    },

    // DELETE api/products/:id
    delete: async (req, res) =>{
        const response = await productsService.delete(req.params.id)
        res.send(response)
    },
}
