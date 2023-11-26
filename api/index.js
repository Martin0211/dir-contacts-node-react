const app = require("./app")
const {conn} = require("./src/models/index")

conn.sync({
    force: true
}).then(() => {
    app.listen(3001, () => {
        console.log("Servidor funcionando en el puerto 3001");
    })
})