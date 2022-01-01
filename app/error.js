// 404 Error Handler
const error404 = (_req, _res, next) => {
    const error = new Error("Resources Not Found!");
    error.status = 404;
    next(error);
}
// Global Error Handler
const globalError = (error, req, res, next) => {
    if(error.status === 404){
        return res.status(404).json({message: error.message})
    }

    res.status(500).json({message: "Something Wrong happened in the server!"})
}

// Module Export
module.exports = {
    error404, globalError
}