import { Router } from 'express';
import appRoutes from '@/constants/appRoutes';
import blogController from '@/modules/blogs/blogController';
import commentController from '@/modules/comments/commentController';

export const appRouter = Router();

// blog routes
appRouter.get(appRoutes.BLOGS, blogController.getAllBlogs);
appRouter.get(`${appRoutes.BLOGS}/:id`, blogController.getBlogDetails);

// comment routes
appRouter.get(appRoutes.COMMENTS, commentController.fetchAllComments);

export default appRouter;
