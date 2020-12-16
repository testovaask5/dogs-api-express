// @ts-check
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    JSDOM.fromFile("./test/index.html", {
        runScripts: 'dangerously',
        resources: 'usable',
        beforeParse: (window) => {
            window.SSR = true
        }
    }).then(dom => {
        setTimeout(() => {
            res.send(dom.serialize());
        }, 50)
    });
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
