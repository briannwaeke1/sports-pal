import { router, publicProcedure } from "@/server/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = router({
  getTestData: publicProcedure.query(async () => {
    return ["Test"];
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
