import { BackgroundGrid } from "@/app/components/hero/components/background-grid/background-grid";
import { TypingText } from "@/app/components/hero/components/typing-text/typing-text";
import { Container } from "@/components/container/container";
import { GenerateLogoBrand } from "@/components/generate-logo-brand/generate-logo-brand";
import { GlitchText } from "@/components/glitch-text/glitch-text";
import { TiltCard } from "@/components/tilt-card/tilt-card";
import Image from "next/image";

export function Hero() {
  return (
    <div>
      <BackgroundGrid>
        <Container>
          <div className="relative">
            <div className="absolute translate-y-[40%] w-full flex items-start justify-between">
              <div className="w-[calc(45%)]">
                <div>
                  <div className="text-[50px] font-bold">
                    <div>
                      Tôi là{" "}
                      <span className="text-blue-500">
                        <GlitchText
                          speed={0.1}
                          enableShadows
                          enableOnHover={true}
                          className="inline-block text-black! dark:text-white!"
                        >
                          DevT
                        </GlitchText>
                      </span>
                    </div>
                    <div className="text-[40px] flex items-center gap-x-2">
                      <p>là một lập trình viên</p>
                      <TypingText />
                    </div>
                  </div>
                  <p className="mt-4">
                    Là một lập trình viên{" "}
                    <span className="inline-block text-blue-500 font-semibold text-[20px]">
                      Fullstack
                    </span>{" "}
                    với hơn{" "}
                    <span className="inline-block text-blue-500 font-semibold text-[20px]">
                      2+{" "}
                    </span>{" "}
                    năm kinh nghiệm, tôi chuyên về việc xây dựng các ứng dụng
                    web hiệu quả và có khả năng mở rộng. Với kiến thức CI/CD
                    vững chắc và kỹ năng làm việc nhóm xuất sắc, tôi cam kết
                    mang lại các giải pháp chất lượng cao đáp ứng nhu cầu kinh
                    doanh.
                  </p>
                </div>

                <div className="flex items-center gap-x-4 opacity-40 select-none mt-4">
                  <GenerateLogoBrand
                    darkLogoUrl="/images/nextjs-logo-dark.png"
                    lightLogoUrl="/images/nextjs-logo-light.png"
                    width={100}
                    height={100}
                  />

                  <GenerateLogoBrand
                    darkLogoUrl="/images/nestjs-logo.png"
                    lightLogoUrl="/images/nestjs-logo.png"
                    width={100}
                    height={100}
                  />

                  <GenerateLogoBrand
                    darkLogoUrl="/images/react-logo.png"
                    lightLogoUrl="/images/react-logo.png"
                    width={40}
                    height={40}
                  />

                  <GenerateLogoBrand
                    darkLogoUrl="/images/vercel-logotype-dark.png"
                    lightLogoUrl="/images/vercel-logotype-light.png"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div className="w-[calc(45%)] overflow-hidden rounded-lg transition-all duration-300">
                <TiltCard>
                  <Image
                    src="/images/devt.jpg"
                    alt="Meme Meo Cuoi 14"
                    width={500}
                    height={500}
                    className="w-125 h-125 object-contain rounded-lg"
                  />
                </TiltCard>
              </div>
            </div>
          </div>
        </Container>
      </BackgroundGrid>
    </div>
  );
}
