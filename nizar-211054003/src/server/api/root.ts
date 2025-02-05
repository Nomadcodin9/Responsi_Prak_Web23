import { createTRPCRouter } from "@/server/api/trpc";
import { userRouter } from "./routers/user";
import { itemRouter } from "./routers/menu/item";
import { packageRouter } from "./routers/menu/packageItem";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  user: userRouter,
  item: itemRouter,
  packageItem: packageRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
