const app = require("./app");
const {conn} = require("./src/models/index");
const { PORT } = require("./config");

conn.sync({
    force: false
}).then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor funcionando en el puerto ${PORT}`);
    })
})