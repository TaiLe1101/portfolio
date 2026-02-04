import { BaseEntity } from "@/types/base-entity";

export interface Project extends BaseEntity {
  categoryName: string;
  description: string;
  technologies: string[];
  thumbnailUrl: string;
  title: string;
  liveUrl: string | null;
  githubUrl: string | null;
}
