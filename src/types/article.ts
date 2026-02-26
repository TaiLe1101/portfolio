import { ApiBaseEntity, ApiResponse, PaginatedResponse } from './api-response';

/**
 * Article Entity
 */
export interface Article extends ApiBaseEntity {
  title: string;
  slug: string;
  description: string;
  content: string;
  isDraft: boolean;
  publishedAt: Date | null;
  authorId: number;
  categoryId: number;
}

/**
 * Create Article Request
 */
export interface CreateArticleRequest {
  title: string;
  slug: string;
  description: string;
  content: string;
  isDraft: boolean;
  publishedAt: Date | null;
  authorId: number;
  categoryId: number;
}

/**
 * Update Article Request
 */
export interface UpdateArticleRequest {
  title?: string;
  slug?: string;
  description?: string;
  content?: string;
  isDraft?: boolean;
  publishedAt?: Date | null;
  authorId?: number;
  categoryId?: number;
}

/**
 * Article List Response
 */
export type ArticleListResponse = PaginatedResponse<Article>;

/**
 * Article Create Response
 */
export interface ArticleCreateResponse extends ApiResponse<Article> {
  statusCode: 201;
  message: "Success";
}

/**
 * Article Update Response
 */
export interface ArticleUpdateResponse extends ApiResponse<Article> {
  statusCode: 200;
  message: "Success";
}

/**
 * Article Delete Response
 */
export interface ArticleDeleteResponse extends ApiResponse {
  statusCode: 200;
  message: "Success";
}
