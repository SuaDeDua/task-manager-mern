import { Router } from "express";
import {
  createWorkspaceController,
  getAllWorkspacesUserIsMemberController,
  getWorkspaceAnalyticsController,
  getWorkspaceByIdController,
  getWorkspaceMembersController,
  changeWorkspaceMemberRoleController,
  updateWorkspaceByIdController,
  deleteWorkspaceByIdController,
  leaveWorkspaceByIdController
} from "../controllers/workspace.controller";

const workspaceRoutes = Router();

workspaceRoutes.post("/create/new", createWorkspaceController);

workspaceRoutes.put("/update/:id", updateWorkspaceByIdController)

workspaceRoutes.put("/change/member/role/:id", changeWorkspaceMemberRoleController);

workspaceRoutes.delete("/delete/:id", deleteWorkspaceByIdController)
workspaceRoutes.delete("/leave/:id", leaveWorkspaceByIdController)

workspaceRoutes.get("/all", getAllWorkspacesUserIsMemberController);

workspaceRoutes.get("/members/:id", getWorkspaceMembersController);

workspaceRoutes.get("/analytics/:id", getWorkspaceAnalyticsController);

workspaceRoutes.get("/:id", getWorkspaceByIdController);

export default workspaceRoutes;
