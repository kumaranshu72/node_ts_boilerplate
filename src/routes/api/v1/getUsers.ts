import { Router } from 'express'
import {commandFactory as CommandFactory} from 'hystrixjs'
import request from 'request-promise-native'

const router: Router = Router()

const makeRequest = (id: any) => request.get({
  uri: 'http://localhost:5000/users',
})

const fallback = (err: any, args: any) => {
  console.log('error in fallback', err)
  return Promise.resolve({
    oops: 'from fallback',
	  error: err.message,
    args,
  })
}

const commandBuilder = CommandFactory.getOrCreate('hystrix_sample')
  .run(makeRequest)
  .timeout(10)
  .fallbackTo(fallback)

export default (req: any, res: any) => {
  const cmd = commandBuilder.build()

  cmd.execute(1)
     .then(user => {
      return res.json({
        user,
       })
     }).then( (err) => {
      console.log('error in catch', err)
      return res.status(500).send({
        error: err.message,
        oops: 'direct error',
      })
    })
}
