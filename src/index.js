var http = require("http");

const PORT = 8081;
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    const URL = req.url;
    if(URL == "/welcome") {
        res.writeHead(200, {"content-type" : "text/plain"});
        res.write("Welcome to Dominos!");
        res.end();
        return;
    }
    
    if(URL == "/contact") {
        res.writeHead(200, {"content-type" : "application/json"});
        res.write(JSON.stringify(
            {  
                phone: '18602100000', 
                email: 'guestcaredominos@jublfood.com' 
            }               
        ))
        res.end();
        return;
    }
    
    res.writeHead(404);
    res.write("404 Not Found");
    res.end();

}

httpServer.listen(PORT, (err) => {
    if(err) console.log("ERROR : ", err);
    else console.log("Server running on port 8081...");
})

module.exports = httpServer;