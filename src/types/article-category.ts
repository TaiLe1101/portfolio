import { ApiBaseEntity, ApiResponse, PaginatedResponse } from './api-response';

/**
 * Article Category Entity
 */
export interface ArticleCategory extends ApiBaseEntity {
  title: string;
  slug: string;
  description: string;
  sortOrder: number;
  isActive: boolean;
}

/**
 * Create Article Category Request
 */
export interface CreateArticleCategoryRequest {
  title: string;
  slug: string;
  description: string;
  sortOrder: number;
  isActive: boolean;
}

/**
 * Update Article Category Request
 */
export interface UpdateArticleCategoryRequest {
  title?: string;
  slug?: string;
  description?: string;
  sortOrder?: number;
  isActive?: boolean;
}

/**
 * Article Category List Response
 */
export type ArticleCategoryListResponse = PaginatedResponse<ArticleCategory>;

/**
 * Article Category Create Response
 */
export interface ArticleCategoryCreateResponse extends ApiResponse<ArticleCategory> {
  statusCode: 201;
  message: "Success";
}

/**
 * Article Category Update Response
 */
export interface ArticleCategoryUpdateResponse extends ApiResponse<ArticleCategory> {
  statusCode: 200;
  message: "Success";
}

/**
 * Article Category Delete Response
 */
export interface ArticleCategoryDeleteResponse extends ApiResponse {
  statusCode: 200;
  message: "Success";
}
