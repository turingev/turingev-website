import { Router } from "oak";
import { addMemberApplication } from "./controllers/memberApplications.ts";

export const router = new Router({
  prefix: "/api",
});
router
  .post("/apply-member", addMemberApplication);
