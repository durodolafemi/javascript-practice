/* Default Parameters */
export default (()=>{
    function logMessage(message = "No message to log"){
        console.log(`This is your message : ${message}`)
    }
    logMessage()
})()