import jsCookie from 'js-cookie'
const tokey = process.env.VUE_APP_tokey
function tokenOptions (options) {
  return {
    path: '/',
    domain: DocumentDomain(),
    ...options
  }
}
export function getToken (options = {}) {
  return jsCookie.get(tokey, tokenOptions(options))
}

export function removeToken (options = {}) {
  jsCookie.remove(tokey, tokenOptions(options))
}

export function setToken (token, options = {}) {
  jsCookie.set(tokey, token, tokenOptions(options))
}

export function DocumentDomain () {
  if (document.domain === 'localhost' || document.domain === '127.0.0.1') {
    return document.domain
  }
  return process.env.VUE_APP_domain
}
