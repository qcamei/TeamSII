import jQuery from 'jquery'

export default function getJson (url, data, fn) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)
  jQuery.getJSON(`http://query.yahooapis.com/v1/public/yql`, {
    q: `select * from json where url='${url}'`,
    format: 'json'
  }, function (response) {
    fn(response)
  })
}

// 将data拼到url中
export function param (data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
