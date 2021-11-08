const appIcon = require('app-icon')
const path = require('path')

Promise.resolve().then(() => {
  appIcon.generate({
    sourceIcon: path.join(__dirname, './app-icon.png'),
    platforms: 'ios',
  })
})
