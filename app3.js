const http = require('http')
const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log(req.headers)
    res.setHeader('Content-type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title><head>')
    res.write('<body><h1>Hi baby how are you</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(3000)