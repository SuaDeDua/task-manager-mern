import { Router } from "express";
import {
  createProjectController,
  deleteProjectByIdController,
  getAllProjectsInWorkspaceController,
  getProjectAnalyticsController,
  getProjectByIdController,
  updateProjectByIdController,
} from "../controllers/project.controller";

const projectRoutes = Router();

projectRoutes.post("/workspace/:workspaceId/create", createProjectController);

projectRoutes.put("/:id/workspace/:workspaceId/update", updateProjectByIdController);

projectRoutes.delete("/:id/workspace/:workspaceId/delete", deleteProjectByIdController);

projectRoutes.get(
  "/workspace/:workspaceId/all",
  getAllProjectsInWorkspaceController
);

projectRoutes.get(
  "/:id/workspace/:workspaceId/analytics",
  getProjectAnalyticsController
);

projectRoutes.get("/:id/workspace/:workspaceId", getProjectByIdController);

export default projectRoutes;
