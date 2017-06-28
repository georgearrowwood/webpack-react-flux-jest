import server from './app/bootstrap'

let port = process.env.PORT
server.listen(port, () => {
  console.log('Server is listening at %s', port)
})
