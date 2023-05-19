import express from 'express'

const{
  npm_package_name,
  npm_package_version,
  PORT
}  = process.env
const port = PORT|| 3002
const app = express()

app.get( '/about', ( req, res ) => {
  return res.status( 200 ).json({
    npm_package_name,
    npm_package_version
  })
})

app.listen( port, () => console.log( `App started on port :${ port } ` ))
