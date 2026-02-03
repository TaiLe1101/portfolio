import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Landmark, LifeBuoy } from "lucide-react";

const experiences = [
  {
    title: "Junior Full Stack Developer",
    company: "CÔNG TY TNHH QUẢN LÝ NUÔI TRỒNG NHÀ CỦA YẾN SÀO",
    period: "2024 - Hiện tại",
    description: [
      "Tham gia phát triển các ứng dụng web quy mô doanh nghiệp, hướng dẫn các lập trình viên mới, và triển khai các thực hành tốt nhất để đảm bảo chất lượng mã và tối ưu hiệu suất.",
      "Tôi là trưởng nhóm của một nhóm gồm 3 lập trình viên, triển khai mã, phát triển sản phẩm và quy trình CI/CD.",
      "Cải thiện hiệu suất ứng dụng và phát triển các tính năng mới dựa trên phản hồi của người dùng.",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "CI/CD"],
    icon: Landmark,
  },
  {
    title: "Full Stack Developer",
    company: "CÔNG TY CỔ PHẦN GIẢI PHÁP CẢNG VÀ HẬU CẦN",
    period: "2023 - 2024",
    description: [
      "Phát triển và duy trì các ứng dụng web và ứng dụng desktop, mobile sử dụng các công nghệ hiện đại, đồng thời hợp tác với các nhóm đa chức năng để cung cấp các giải pháp phần mềm hiệu quả.",
      "Phối hợp với đội nhóm Dev và R&D để triển khai các giải pháp công nghệ mới.",
      "Đã xây dựng hệ thống số hóa quy trình cảng, giúp giảm thời gian xử lý thủ tục.",
      "Tích hợp AI xử lý việc OCR và nhận diện các mặt container. phát hiện lỗi bề mặt container.",
    ],
    technologies: ["C#", "Blazor", "SQL Server", ".NET MAUI"],
    icon: LifeBuoy,
  },
];

export function Timeline() {
  return (
    <div className="mx-auto px-6">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute inset-y-0 left-0 border-l-2 border-l-black/20 dark:border-l-white/20" />

        {experiences.map(
          (
            { company, description, period, technologies, title, icon: Icon },
            index,
          ) => (
            <div className="relative pb-12 pl-10 last:pb-0" key={index}>
              {/* Timeline Icon */}
              <div className="absolute left-px flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full dark:bg-white dark:text-black bg-black/90 text-white">
                <Icon className="h-5 w-5" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Building2 className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <span className="font-medium text-base">{company}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl tracking-[-0.01em]">
                    {title}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    <span>{period}</span>
                  </div>
                </div>
                {description.map((desc, descIndex) => (
                  <p
                    className="flex items-start gap-x-2 text-pretty text-muted-foreground"
                    key={descIndex}
                  >
                    - {desc}
                  </p>
                ))}

                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech) => (
                    <Badge
                      className="rounded-full"
                      key={tech}
                      variant="secondary"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
