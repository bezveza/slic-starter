import { getUserServiceUrl } from './url-retriever'

const signedAxios = require('aws-signed-axios')

const userServiceUrlPromise = getUserServiceUrl()

async function getEmailFromUserId(userId) {
  const userUrl = `${await userServiceUrlPromise}${userId}`

  const { data: result } = await signedAxios({
    method: 'GET',
    url: userUrl
  })

  return result
}





module.exports = {
  getEmailFromUserId
}
