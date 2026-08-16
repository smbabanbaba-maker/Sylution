import { createStartHandler, defaultRenderHandler } from "@tanstack/start/server";
import { getRouter } from "./router";

export default createStartHandler({
  createRouter: getRouter,
  renderHandler: defaultRenderHandler,
});
