import { BaseEntity } from "@/types/base-entity";
import { Category } from "@/types/category";

export interface Post extends BaseEntity {
  title: string;
  slug: string;
  thumbnailUrl: string;
  description: string;
  content: string;
  categoryId: string;
  category?: Category;
}
