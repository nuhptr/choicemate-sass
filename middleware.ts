import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
   // By default, if a user is not authenticated, they will be redirected to /sign-in.
   // add publicRoutes to override this behavior.
   publicRoutes: ["/"],
})

export const config = {
   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
