import { ApiBaseEntity, ApiResponse, PaginatedResponse } from './api-response';

/**
 * Project Entity (API Version)
 */
export interface ProjectApi extends ApiBaseEntity {
  title: string;
  thumbnailUrl: string;
  description: string;
  repoUrl: string | null;
  previewUrl: string | null;
  technologies: string;
}

/**
 * Create Project Request
 */
export interface CreateProjectRequest {
  title: string;
  thumbnailUrl: string;
  description: string;
  repoUrl: string | null;
  previewUrl: string | null;
  technologies: string;
}

/**
 * Update Project Request
 */
export interface UpdateProjectRequest {
  title?: string;
  thumbnailUrl?: string;
  description?: string;
  repoUrl?: string | null;
  previewUrl?: string | null;
  technologies?: string;
}

/**
 * Project List Response
 */
export type ProjectListResponse = PaginatedResponse<ProjectApi>;

/**
 * Project Create Response
 */
export interface ProjectCreateResponse extends ApiResponse<ProjectApi> {
  statusCode: 201;
  message: "Success";
}

/**
 * Project Update Response
 */
export interface ProjectUpdateResponse extends ApiResponse<ProjectApi> {
  statusCode: 200;
  message: "Success";
}

/**
 * Project Delete Response
 */
export interface ProjectDeleteResponse extends ApiResponse {
  statusCode: 200;
  message: "Success";
}
