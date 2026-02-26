/**
 * Base API Response Types
 * Based on API Documentation
 */

/**
 * Standard Success Response
 */
export interface ApiResponse<T = unknown> {
  statusCode: number;
  message: string;
  data?: T;
}

/**
 * Pagination Metadata
 */
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  q?: string;
}

/**
 * Paginated Data Response
 */
export interface PaginatedData<T> {
  result: T[];
  meta: PaginationMeta;
}

/**
 * Paginated Response
 */
export interface PaginatedResponse<T> extends ApiResponse<PaginatedData<T>> {
  statusCode: 200;
  message: "Success";
}

/**
 * Error Response
 */
export interface ApiErrorResponse {
  statusCode: number;
  message: string;
  error?: string;
}

/**
 * Base Entity Fields (from API)
 */
export interface ApiBaseEntity {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isRemoved: boolean;
}
