//how server work behing the scene
const http = require('http')

const rqlistener = (req, res) => {
    console.log(req)
}

const server = http.createServer(rqlistener)
server.listen(3000)