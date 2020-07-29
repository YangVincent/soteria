const net = require('net')
const dns = require('dns')

dns.lookup('example.com', (err, address) => {
    if (err) throw err

    const socket = net.createConnection({
        host: address, // ip address
        post: 80,
    })
    
    // 1 IP may host many servers, so you should specify.
    const request = `
GET / HTTP/1.1
Host: example.com
    
    `.slice(1) // Remove the first newline
    
    // Send data across socket to server.
    socket.write(request)
    
    // Print what you get from the server out.
    socket.pipe(process.stdout)
})

