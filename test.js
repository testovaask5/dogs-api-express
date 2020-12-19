// @ts-check
// const jsdom = require("jsdom");
const { JSDOM } = require("jsdom");
const express = require('express')
const app = express()
const { EventEmitter } = require('events')
class SSREmitter extends EventEmitter {}

function render(res) {
    const renderEmmitter = new SSREmitter()
    JSDOM.fromFile("./test/index.html", {
        runScripts: 'dangerously',
        resources: 'usable',
        beforeParse: (window) => {
            window.SSR = true
            window.finishRender = () => {
                renderEmmitter.emit('finish')
            }
        }
    }).then(dom => {
        renderEmmitter.once('finish', () => {
            res.send(dom.serialize());
        })
    });
    return dom.serialize()
}

app.get('/', async (req, res, next) => {
    const html = await render('/create')
    res.send(html)
})

app.use(express.static('./test'))

app.listen(3000, () => {
    console.log('Server started at http://localhost:3000')
})

// const dom = new JSDOM(`<body>
//     <p>Hello world</p>
//     <script>document.body.appendChild(document.createElement("hr"));</script>
// </body>`, { runScripts: "dangerously" });
// console.log(dom.window.document.querySelector("p").textContent);
// console.log(dom.serialize());
