import { BackgroundResume } from "@/app/resume/components/background-resume/background-resume";
import { BlogCard } from "@/components/blog-card/blog-card";
import { Container } from "@/components/container/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Download } from "lucide-react";
import Image from "next/image";

export default function ResumePage() {
  return (
    <Container className="mb-8">
      <div className="flex justify-between gap-x-8 h-full">
        <section className="w-[calc(75%-32px)]">
          <section className="flex justify-end gap-x-2">
            <Button size="sm" variant="outline">
              <span>Tải PDF</span> <Download></Download>
            </Button>
          </section>

          <section className="border border-black/10 dark:border-white/10 mt-4 rounded-lg overflow-hidden">
            <BackgroundResume>
              <div className="p-2">
                <section className="flex items-start gap-x-4">
                  <div className="w-36 h-48 overflow-hidden rounded-md p-1">
                    <Image
                      src="/images/devt.jpg"
                      alt="DevT"
                      width={144}
                      height={192}
                      className="object-cover w-full h-full"
                    ></Image>
                  </div>
                  <div>
                    <p className="text-[24px] font-bold">Lê Trần Tấn Tài</p>
                    <p className="text-[20px] font-light">
                      Junior Web Developer
                    </p>

                    <div className="flex items-center gap-x-2 text-[14px]">
                      <span>Ngày sinh: </span>
                      <span>11/01/2003</span>
                    </div>

                    <div className="flex items-center gap-x-2 text-[14px]">
                      <span>Giới tính: </span>
                      <span>Nam</span>
                    </div>

                    <div className="flex items-center gap-x-2 text-[14px]">
                      <span>Số điện thoại: </span>
                      <span>+84 865 850 073</span>
                    </div>

                    <div className="flex items-center gap-x-2 text-[14px]">
                      <span>Email: </span>
                      <span>taic21a.th1@gmail.com</span>
                    </div>

                    <div className="flex items-center gap-x-2 text-[14px]">
                      <span>Website: </span>
                      <span>devt.id.vn</span>
                    </div>

                    <div className="flex items-center gap-x-2 text-[14px]">
                      <span>Địa chỉ: </span>
                      <span>Tp. Hồ Chí Minh</span>
                    </div>
                  </div>
                </section>

                <section className="mt-4">
                  <p className="text-[20px] font-semibold uppercase">
                    Mục tiêu nghề nghiệp
                  </p>
                  <Separator className="mb-4" />
                  <p className="text-[14px] font-light">
                    Với 2+ năm kinh nghiệm trong lĩnh vực phát triển web, tôi
                    mong muốn đóng góp kỹ năng và kiến thức của mình vào một môi
                    trường năng động, nơi tôi có thể phát triển các ứng dụng web
                    sáng tạo và hiệu quả, đồng thời tiếp tục học hỏi và nâng cao
                    chuyên môn của mình.
                  </p>
                </section>

                <section className="mt-4">
                  <p className="text-[20px] font-semibold uppercase">Kỹ năng</p>
                  <Separator className="mb-4" />
                  <p className="text-[14px] font-light"></p>
                </section>

                <section className="mt-4">
                  <p className="text-[20px] font-semibold uppercase">Học vấn</p>
                  <Separator className="mb-4" />
                  <div className="flex items-start gap-x-8">
                    <p className="w-[10%] text-[14px] font-light">
                      2021 - 2024
                    </p>
                    <div>
                      <p className="text-[14px] font-bold">
                        Trường cao đẳng Giao Thông Vận Tải HCM
                      </p>

                      <p className="mt-1 text-[14px] font-bold">
                        <span>Chuyên ngành: </span>
                        <span>Công nghệ thông tin</span>
                      </p>
                      <ul>
                        <li className="ml-8 list-disc">
                          <p className="text-[14px] font-light">
                            <span>Xếp loại: </span>
                            <span>Xuất sắc</span>
                            <span> - </span>
                            <span>GPA </span>
                            <span>3.8/4</span>
                          </p>
                        </li>
                      </ul>

                      <p className="mt-1 text-[14px] font-bold">
                        <span>Thành tích nổi bật: </span>
                      </p>

                      <ul>
                        <li className="ml-8 list-disc">
                          <p className="text-[14px] font-light">
                            Đạt học bổng Xuất sắc 2 năm liên tiếp.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section className="mt-4">
                  <p className="text-[20px] font-semibold uppercase">
                    Kinh nghiệm làm việc
                  </p>
                  <Separator className="mb-4" />

                  <div className="flex items-start gap-x-8">
                    <p className="w-[10%] text-[14px] font-light">
                      2024 - Hiện tại
                    </p>
                    <div>
                      <p className="text-[14px] font-bold">
                        CÔNG TY TNHH QUẢN LÝ NUÔI TRỒNG NHÀ CỦA YẾN SÀO
                      </p>

                      <p className="mt-1 text-[14px] font-bold">
                        Junior Full Stack Developer
                      </p>
                      <ul>
                        <li className="ml-8 list-disc">
                          <p className="text-[14px] font-light">
                            Tham gia phát triển các ứng dụng web quy mô doanh
                            nghiệp, hướng dẫn các lập trình viên mới, và triển
                            khai các thực hành tốt nhất để đảm bảo chất lượng mã
                            và tối ưu hiệu suất.
                          </p>
                        </li>
                        <li className="ml-8 list-disc mt-1">
                          <p className="text-[14px] font-light">
                            Tôi là trưởng nhóm của một nhóm gồm 3 lập trình
                            viên, triển khai mã, phát triển sản phẩm và quy
                            trình CI/CD.
                          </p>
                        </li>
                        <li className="ml-8 list-disc mt-1">
                          <p className="text-[14px] font-light">
                            Cải thiện hiệu suất ứng dụng và phát triển các tính
                            năng mới dựa trên phản hồi của người dùng.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-x-8 mt-4">
                    <p className="w-[10%] text-[14px] font-light">
                      2023 - 2024
                    </p>
                    <div>
                      <p className="text-[14px] font-bold">
                        CÔNG TY CỔ PHẦN GIẢI PHÁP CẢNG VÀ HẬU CẦN
                      </p>

                      <p className="mt-1 text-[14px] font-bold">
                        Full Stack Developer
                      </p>
                      <ul>
                        <li className="ml-8 list-disc">
                          <p className="text-[14px] font-light">
                            Phát triển và duy trì các ứng dụng web và ứng dụng
                            desktop, mobile sử dụng các công nghệ hiện đại, đồng
                            thời hợp tác với các nhóm đa chức năng để cung cấp
                            các giải pháp phần mềm hiệu quả.
                          </p>
                        </li>
                        <li className="ml-8 list-disc mt-1">
                          <p className="text-[14px] font-light">
                            Phối hợp với đội nhóm Dev và R&D để triển khai các
                            giải pháp công nghệ mới.
                          </p>
                        </li>
                        <li className="ml-8 list-disc mt-1">
                          <p className="text-[14px] font-light">
                            Đã xây dựng hệ thống số hóa quy trình cảng, giúp
                            giảm thời gian xử lý thủ tục.
                          </p>
                        </li>
                        <li className="ml-8 list-disc mt-1">
                          <p className="text-[14px] font-light">
                            Tích hợp AI xử lý việc OCR và nhận diện các mặt
                            container. phát hiện lỗi bề mặt container.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </BackgroundResume>
          </section>
        </section>

        <section className="w-[calc(25%-32px)] sticky top-20 self-start p-2">
          <div>
            <p className="text-[16px]">Các bài Blog của tôi</p>

            <div className="mt-4 flex flex-col gap-y-2">
              <div>
                <BlogCard></BlogCard>
              </div>
              <div>
                <BlogCard></BlogCard>
              </div>
              <div>
                <BlogCard></BlogCard>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
