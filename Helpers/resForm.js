module.exports = {
    getAll: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
    },
    getByStatus: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
        
    },
    getStatus: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
        
    },
    getGenre: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
        
    },
    getTitle: (res,response, title)=>{
        const form = {
            title,
            response,
        

        };
        res.json(form);
        
    },
    getByID: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
    },
    getByGenre: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
    },
    postBooks: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
    },
    deleteBooks: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
    },
    putBooks: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
    },
    updateStatus: (res,response, status)=>{
        const form = {
            status,
            response,
        

        };
        res.json(form);
    },
    getHistory :(res,response,status)=>{
        const form = {
            status,
            response,

        };
        res.json(form)
    } ,
    postBorrow :(res,response,status)=>{
        const form={
            status,response,
        };
        res.json(form)
        },
    

   
getWishlist :(res,response,status)=>{
    const form = {
        status,
        response,

    };
    res.json(form)
} ,
postWishlist :(res,response,status)=>{
    const form={
        status,response,
    };
    res.json(form)
    },
deleteWishlist :(res,response,status)=>{
        const form={
            status,response,
        };
        res.json(form)
        },
    

}