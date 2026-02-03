import { CardProject } from "@/components/card-project/card-project";
import { Container } from "@/components/container/container";
import { ElectricBorder } from "@/components/electric-border/electric-border";
import RotatingText from "@/components/rotating-text/rotating-text";

export function Projects() {
  return (
    <Container className="mt-16">
      <div>
        <div className="flex flex-col items-center text-center gap-y-4">
          <p className="flex items-center justify-center gap-x-2 font-bold text-[50px]">
            Các dự án lĩnh vực
            <RotatingText
              texts={["Frontend", "Backend"]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </p>
          <p className="mt-4 max-w-[50%]">
            Dưới đây là một số dự án nổi bật mà tôi đã thực hiện trong lĩnh vực
            phát triển web. Mỗi dự án đều thể hiện kỹ năng và sự sáng tạo của
            tôi trong việc xây dựng các ứng dụng web hiệu quả và có khả năng mở
            rộng.
          </p>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="basis-full md:basis-1/2 lg:basis-1/4">
              <ElectricBorder color="#7df9ff" speed={1} chaos={0.12}>
                <CardProject />
              </ElectricBorder>
            </div>
            <div className="basis-full md:basis-1/2 lg:basis-1/4">
              <ElectricBorder color="#7df9ff" speed={1} chaos={0.12}>
                <CardProject />
              </ElectricBorder>
            </div>
            <div className="basis-full md:basis-1/2 lg:basis-1/4">
              <ElectricBorder color="#7df9ff" speed={1} chaos={0.12}>
                <CardProject />
              </ElectricBorder>
            </div>
            <div className="basis-full md:basis-1/2 lg:basis-1/4">
              <ElectricBorder color="#7df9ff" speed={1} chaos={0.12}>
                <CardProject />
              </ElectricBorder>
            </div>
            <div className="basis-full md:basis-1/2 lg:basis-1/4">
              <ElectricBorder color="#7df9ff" speed={1} chaos={0.12}>
                <CardProject />
              </ElectricBorder>
            </div>
            <div className="basis-full md:basis-1/2 lg:basis-1/4">
              <ElectricBorder color="#7df9ff" speed={1} chaos={0.12}>
                <CardProject />
              </ElectricBorder>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
