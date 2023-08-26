import { Application, isHttpError } from "oak";
import { router } from "./routes.ts";

const port = 9000;

const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  console.log(
    ctx.request.method,
    ctx.request.url.href,
    ctx.response.status,
    ctx.response.headers.get("X-Response-Time"),
  );
});

// Timing
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

// Error Handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    if (isHttpError(e)) {
      ctx.response.body = `${e.status} ${e.toString()}`;
      ctx.response.status = e.status;
    } else {
      ctx.response.body = `${500} Server Error`;
      ctx.response.status = 500;
      console.error(e);
    }
  }
});

// oak routes
app.use(router.routes());
app.use(router.allowedMethods());

// Static
app.use(async (ctx, next) => {
  try {
    await ctx.send({
      root: `${Deno.cwd()}/../_site`,
      index: "index.html",
    });
  } catch {
    ctx.throw(404);
  }
});

console.log(`start server on port ${port}`);
await app.listen({ port });
