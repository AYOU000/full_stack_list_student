import express from "express";
const app = express();
const port = 5000;
app.get('/', (req, res) => {
    res.send("hallo user");
});
app.listen(port, () => {
    console.log("running on port" + port);
});
//# sourceMappingURL=index.js.map