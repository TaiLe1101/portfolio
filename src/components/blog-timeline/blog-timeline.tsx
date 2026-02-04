import ShinyText from "@/components/ShinyText";
import { Badge } from "@/components/ui/badge";
import { Post } from "@/types/post";
import { Clock } from "lucide-react";
import Link from "next/link";

const POSTS: Post[] = [
  {
    id: 1,
    title: "Tìm hiểu về React Hooks",
    slug: "tim-hieu-ve-react-hooks",
    thumbnailUrl: "",
    description:
      "React Hooks là một tính năng mạnh mẽ giúp bạn sử dụng state và các tính năng khác của React mà không cần viết class.",
    content: "",
    categoryId: "1",
    createdAt: new Date("2026-01-11"),
    updatedAt: new Date("2026-01-11"),
    category: {
      id: 1,
      name: "Lập trình",
      slug: "lap-trinh",
      createdAt: new Date("2025-12-01"),
      updatedAt: new Date("2025-12-01"),
    },
  },
  {
    id: 2,
    title:
      "Sử dụng AI trong phát triển phần mềm React Hooks là một tính năng mạnh mẽ giúp bạn sử dụng state và các tính năng khác của React mà không cần viết class.",
    slug: "su-dung-ai-trong-phat-trien-phan-mem",
    thumbnailUrl: "",
    description:
      "React Hooks là một tính năng mạnh mẽ giúp bạn sử dụng state và các tính năng khác của React mà không cần viết class.",
    content: "",
    categoryId: "1",
    createdAt: new Date("2026-01-11"),
    updatedAt: new Date("2026-01-11"),
    category: {
      id: 1,
      name: "Lập trình",
      slug: "lap-trinh",
      createdAt: new Date("2025-12-01"),
      updatedAt: new Date("2025-12-01"),
    },
  },
];

export function BlogTimeline() {
  return (
    <div className="max-w-(--breakpoint-sm)">
      <div className="relative">
        {/* Timeline line */}
        {/* <div className="absolute left-0 top-3 bottom-0 border-l-2" /> */}

        {POSTS.map((post, index) => (
          <div className="group relative" key={index}>
            {/* Content */}
            <div className="flex items-start">
              <div className="mt-3 mr-5 flex w-18.75 shrink-0 flex-col gap-2 text-end sm:w-22.5">
                <h6 className="font-semibold text-primary text-sm">
                  {post.category?.name}
                </h6>
                <span className="text-muted-foreground text-xs sm:text-sm">
                  {post.createdAt.toLocaleDateString()}
                </span>
                <div>
                  <Badge>
                    <Clock></Clock> 15 phút đọc
                  </Badge>
                </div>
              </div>
              <div className="relative space-y-2 border-l-2 pb-10 pl-6 group-last:pb-4 sm:pl-8">
                {/* Timeline Dot */}
                <div className="absolute top-4 -left-px h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background" />

                <h3 className="mt-2 font-semibold text-lg tracking-[-0.01em]">
                  <Link href={`/blog/${post.slug}`}>
                    <ShinyText
                      text={post.title}
                      speed={2}
                      delay={0}
                      spread={120}
                    />
                  </Link>
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base">
                  <Link href={`/blog/${post.slug}`}>{post.description}</Link>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
