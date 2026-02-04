import { BackgroundMode } from "@/app/components/projects/components/background-mode/background-mode";
import { BlogTimeline } from "@/components/blog-timeline/blog-timeline";
import { Container } from "@/components/container/container";

export default function BlogPage() {
  return (
    <BackgroundMode>
      <Container>
        <BlogTimeline />
      </Container>
    </BackgroundMode>
  );
}
