import {clerkMiddleware} from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
    matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
}

//run middle ware on index page and api routes