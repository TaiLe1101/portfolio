import { BaseEntity } from "@/types/base-entity";
import { Post } from "@/types/post";

export interface Category extends BaseEntity {
  name: string;
  slug: string;
  posts?: Post[];
}
