function timestamp() {
    return '[' + new Date().toISOString().replace(/T/g, ' ').replace(/\..*$/, '') + ']'
}

const createLogFunction = name => (...messages) => console[name](timestamp(), `${name.toUpperCase()} -`, ...messages)

const error = createLogFunction('error')
const warn = createLogFunction('warn')
const info = createLogFunction('info')
const debug = createLogFunction('debug')
const trace = createLogFunction('trace')

module.exports = {
    error,
    warn,
    info,
    debug,
    trace
}
