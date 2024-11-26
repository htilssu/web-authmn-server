import { Application, Router } from "https://deno.land/x/oak/mod.ts";


const app = new Application();
const router = new Router();

router.get("/api", (ctx) => {
    ctx.response.body = { message: "This is a simple API in Deno" };
});

app.use(router.routes());
app.use(router.allowedMethods());

console.log("Server is running on http://localhost:8000");
await app.listen({ port: 8000 });