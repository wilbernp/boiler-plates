module.exports = {

    create: async (product) =>{
        return "this is a create product service"
    },

    getAll: async () =>{
        return "this is a getAll product service"
    },

    getById: async (id) =>{
        return "this is a getById product service. ID:" + id
    },

    update: async (id) =>{
        return "this is a update product service. ID:" + id
    },

    delete: async (id) =>{
        return "this is a delete product service. ID:" + id
    },
}