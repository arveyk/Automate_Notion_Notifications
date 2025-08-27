import express from "express";
const APP_PORT = parseInt(PORT) || 8080;

const router = express.Router();
router.use(router);

router.use((request, response, next) => {
  console.log(`${Date.now()}`);
  next();
});

export { router as app };
