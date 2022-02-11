import Router from "@koa/router";
import { isLoggedIn } from "../../middleware";

const userRouter = new Router();

userRouter.get("/", isLoggedIn, async (ctx) => {
    ctx.body = await ctx.state.user.getInfo();
});

userRouter.get("/mca", isLoggedIn, async (ctx) => {
    ctx.body = await ctx.state.user.getMCAInfo();
});

export default userRouter;
