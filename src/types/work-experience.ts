import { ApiBaseEntity, ApiResponse, PaginatedResponse } from './api-response';

/**
 * Work Experience Entity
 */
export interface WorkExperience extends ApiBaseEntity {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  isCurrent: boolean;
  technologies: string;
}

/**
 * Create Work Experience Request
 */
export interface CreateWorkExperienceRequest {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  isCurrent: boolean;
  technologies: string;
}

/**
 * Update Work Experience Request
 */
export interface UpdateWorkExperienceRequest {
  companyName?: string;
  position?: string;
  startDate?: Date;
  endDate?: Date | null;
  description?: string;
  isCurrent?: boolean;
  technologies?: string;
}

/**
 * Work Experience List Response
 */
export type WorkExperienceListResponse = PaginatedResponse<WorkExperience>;

/**
 * Work Experience Create Response
 */
export interface WorkExperienceCreateResponse extends ApiResponse<WorkExperience> {
  statusCode: 201;
  message: "Success";
}

/**
 * Work Experience Update Response
 */
export interface WorkExperienceUpdateResponse extends ApiResponse<WorkExperience> {
  statusCode: 200;
  message: "Success";
}

/**
 * Work Experience Delete Response
 */
export interface WorkExperienceDeleteResponse extends ApiResponse {
  statusCode: 200;
  message: "Success";
}
