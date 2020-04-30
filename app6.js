//time to parse the incoming request the input of the form
const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter message</title><head>')
        res.write('<body><form action="/ma" method = "POST"><input type ="text" name="message"><button type = "submit">submit</button></form><body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/ma' && method === 'POST') {
        const data = []
        req.on('data', (chunk) => {
            console.log(chunk)
            data.push(chunk)

        })
        req.on('end', () => {
            const bu = Buffer.concat(data).toString()
            const mi = JSON.stringify(bu)
            fs.writeFileSync('ram.json', mi)
            const d = fs.readFileSync('ram.json')
            const c = d.toString()
            const e = JSON.parse(c)
            console.log(e.message)
        })
        fs.writeFileSync('message.txt', 'DUMMY')
        res.statusCode = 302
        res.setHeader('LOCATION', '/')
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My first Page</title><head>')
    res.write('<body><h1>Hello from my Node.js Server</h1></body>')
    res.write('</html>')
    res.end()
})
server.listen(3000)