import { CardProject } from "@/components/card-project/card-project";
import { Container } from "@/components/container/container";
import { ElectricBorder } from "@/components/electric-border/electric-border";
import RotatingText from "@/components/rotating-text/rotating-text";
import { Project } from "@/types/project";

const PROJECTS: Project[] = [
  {
    id: 1,
    categoryName: "Fullstack",
    title: "FinTech MyMoney Website",
    description:
      "Là một trang web tài chính cá nhận giúp người dùng vay vốn nhanh chóng và quản lý tài chính cá nhân hiệu quả.",
    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "...",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnailUrl: "/images/mymoney.jpg",
    liveUrl: "https://mymoney.homes",
    githubUrl: null,
  },
  {
    id: 2,
    categoryName: "Fullstack",
    title: "CRM Platform for MyMoney",
    description:
      "Là trang CRM nội bộ giúp đội ngũ chăm sóc khách hàng quản lý quy trình làm việc và tương tác với khách hàng hiệu quả hơn.",
    technologies: ["ReactJs", "ANTD", "Tailwind CSS", "Socket.io", "..."],
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnailUrl: "/images/mymoney.jpg",
    liveUrl: "https://admin.mymoney.homes",
    githubUrl: null,
  },
  {
    id: 3,
    categoryName: "Fullstack",
    title: "Website Ecommerce B2B Pharmacy Mart",
    description:
      "Là một trang web thương mại điện tử B2B dành cho các nhà thuốc, giúp họ dễ dàng đặt hàng và quản lý sản phẩm.",
    technologies: [
      "Nest.js",
      "ReactJs",
      "ANTD",
      "Tailwind",
      "Socket.io",
      "...",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnailUrl:
      "https://res.cloudinary.com/dmowp7zs4/image/upload/v1769926253/DevT/4_k9jnmx.png",
    liveUrl: "https://admin.mymoney.homes",
    githubUrl: null,
  },
  {
    id: 4,
    categoryName: "Fullstack",
    title: "GFOSS SaaS App (Dự án cá nhân)",
    description:
      "Là một ứng dụng SaaS giúp các chủ cửa hàng quản lý cửa hàng cửa mình và sử dụng QR code để cho khách hàng đặt món. và thanh toán không tiền mặt.",
    technologies: [
      "Next.js",
      "Nest.js",
      "Tailwind",
      "Socket.io",
      "OpenAI",
      "...",
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
    thumbnailUrl:
      "https://res.cloudinary.com/dmowp7zs4/image/upload/v1769926015/DevT/3_fjdppl.png",
    liveUrl: null,
    githubUrl: null,
  },
];

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
            {PROJECTS.map((project) => (
              <div
                className="basis-full md:basis-1/2 lg:basis-1/4"
                key={project.id}
              >
                <ElectricBorder color="#7df9ff" speed={1} chaos={0.12}>
                  <CardProject project={project} />
                </ElectricBorder>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
