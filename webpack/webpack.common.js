const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const fileJS = [
    'init',
    'components/common/main',
    'components/home/home',
]

const arrToObj = (arr) => {
    const obj = {}
    arr.map(x => (obj[`js/${x}`]=`./js/${x}`))
    return obj
}

const jsEntries = arrToObj(fileJS)

const plugins = []
plugins.push(new CopyWebpackPlugin([
    {
        from: './node_modules/bootstrap/dist/css/bootstrap.min.css',
        to: '../../public/static/css/bootstrap.min.css',
    },
    {
        from: './node_modules/bootstrap/dist/fonts',
        to: '../../public/static/fonts',
    },
    {
        from: './css/asset/init.css',
        to: '../../public/static/css/init.css',
    }
]))

module.exports = {
    entries:{
        jsEntries,
    },
    plugins,
}