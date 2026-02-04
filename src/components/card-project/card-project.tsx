import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/types/project";
import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CardProjectProps {
  project: Project;
}

export function CardProject({ project }: CardProjectProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        draggable={false}
        src={project.thumbnailUrl}
        alt={project.title}
        className="relative z-20 aspect-video w-full object-cover rounded-tl-xl rounded-tr-xl"
        width={400}
        height={225}
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">{project.categoryName}</Badge>
        </CardAction>
        <CardTitle title={project.title}>
          <span className="line-clamp-1">{project.title}</span>
        </CardTitle>
        <CardDescription>
          <span className="line-clamp-3">{project.description}</span>
          <div className="flex items-center flex-wrap gap-y-2 gap-x-2 mt-4">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                #{tech}
              </Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="w-full flex items-center justify-between">
          {project.liveUrl && (
            <div>
              <Button className="cursor-pointer">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-x-2"
                >
                  <span>Xem Trực Tiếp</span> <LinkIcon />
                </Link>
              </Button>
            </div>
          )}
          <div>
            <Button className="cursor-pointer" disabled={!project.githubUrl}>
              <Link
                href={project.githubUrl ?? "#"}
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </Link>
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
