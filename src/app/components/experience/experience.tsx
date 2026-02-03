import { Container } from "@/components/container/container";
import { Timeline } from "@/components/timeline/timeline";

export function Experience() {
  return (
    <Container className="pt-16">
      <div>
        <div>
          <div className="flex items-start gap-x-4">
            <div className="w-[calc(32%-16px)]">
              <p className="font-bold text-[48px]">Kinh nghiệm làm việc</p>
              <p className="mt-2">
                Kinh nghiệm nghề nghiệp của tôi và giá trị tôi đã mang lại cho
                các tổ chức thông qua các dự án và vai trò khác nhau.
              </p>
              <div className="rounded-2xl border border-black dark:border-white p-4 mt-4">
                <p className="text-[50px] font-bold text-blue-500">2+</p>
                <p className="text-[16px]">NĂM KINH NGHIỆM</p>
              </div>
            </div>
            <div className="w-[60%]">
              <Timeline />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
