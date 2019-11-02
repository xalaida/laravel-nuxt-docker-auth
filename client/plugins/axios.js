const logError = (error) => {
  if (error.response) {
    console.error(`[${error.response.status}] [${error.config.method.toUpperCase()}] ${error.config.url}`)
  } else if (error.request) {
    console.error(`[NO RESPONSE] [${error.config.method.toUpperCase()}] ${error.config.url} ${error.message}`)
  } else {
    console.error(`[NO REQUEST] ${error.message}`)
  }
}

const logResponse = (response) => {
  console.groupCollapsed('Server response')
  console.log(`[${response.status}] [${response.config.method.toUpperCase()}] ${response.config.url}`)
  console.table(response.data)
  console.groupEnd()
}

export default ({ $axios, store }) => {
  $axios.onResponse(logResponse)
  $axios.onError(logError)
}
