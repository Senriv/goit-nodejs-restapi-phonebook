import express from "express";

import authController from "../../controllers/auth-controller.js";
import validateBody from "../../decorators/validateBody.js";
import { userSignupOrSigninSchema } from "../../models/User.js";
import { authenticate } from "../../middlewares/index.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(userSignupOrSigninSchema),
  authController.signup
);

authRouter.post(
  "/login",
  validateBody(userSignupOrSigninSchema),
  authController.signin
);

authRouter.get("/current", authenticate, authController.getCurrent);

authRouter.post("/logout", authenticate, authController.logout);

export default authRouter;
