// 404
export const unkownHandler = (req, res, next)=> {
    res.status(404).send("404 - Content not found")
}

//Error
export const errorHandler = (err, req, res, next)=> {
    console.error("Error")
    res.status(500).send("Sorry, Internet failure")
}