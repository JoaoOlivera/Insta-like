import express from "express";
import routes from "./src/routes/postsRoutes.js";



const app = express();
routes (app)

app.listen(3000, () => {
    console.log("Server is listening");
});







// function buscaPostPorID(id){
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// };

// //puxa pelo id os posts
// app.get("/posts/:id", (req, res) => {
//     const index = buscaPostPorID(req.params.id)
//     res.status(200).json(posts[index]);
// });





