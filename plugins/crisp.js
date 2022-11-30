export default () => {
  window.$crisp = []
  window.CRISP_WEBSITE_ID = 'd2fd4e85-84fb-4dee-9fc1-2ad0c79c3cb8'
  ;(function () {
    const d = document
    const s = d.createElement('script')

    s.src = 'https://client.crisp.chat/l.js'
    s.async = 1
    d.getElementsByTagName('head')[0].appendChild(s)
  })()
}
