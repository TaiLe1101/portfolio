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
import { Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";

export function CardProject() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <Image
        src="/images/mymoney.jpg"
        alt="Event cover"
        className="relative z-20 aspect-video w-full object-cover rounded-tl-xl rounded-tr-xl"
        width={400}
        height={225}
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Fullstack</Badge>
        </CardAction>
        <CardTitle>Website & ứng dụng FinTech MyMoney</CardTitle>
        <CardDescription>
          <span>
            Một nền tảng quản lý tài chính cá nhân toàn diện, cung cấp các công
            cụ và tính năng giúp người dùng theo dõi...
          </span>
          <div className="flex items-center gap-x-2 mt-4">
            <Badge variant="secondary">#ReactJs</Badge>
            <Badge variant="secondary">#NestJs</Badge>
            <Badge variant="secondary">#MySQL</Badge>
            <Badge variant="secondary">#...</Badge>
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <div className="w-full flex items-center justify-between">
          <div>
            <Button className="cursor-pointer">
              <span>Xem Trực Tiếp</span> <LinkIcon />
            </Button>
          </div>
          <div>
            <Button className="cursor-pointer" disabled>
              <Github />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
