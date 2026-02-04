import Image from "next/image";
import Link from "next/link";

export function BlogCard() {
  return (
    <div className="rounded-md overflow-hidden border border-white/10">
      <div className="flex items-start">
        <div className="w-[calc(40%)] h-20 overflow-hidden">
          <Link href="/blog/mymoney-app" className="block w-full h-full">
            <Image
              src="/images/mymoney.jpg"
              alt="Project Name"
              width={120}
              height={120}
              className="w-full h-full object-cover hover:scale-110 transition-all duration-300"
            ></Image>
          </Link>
        </div>

        <div className="max-w-[calc(60%)] p-2 pr-0 pb-0">
          <Link href="/blog/mymoney-app" className="">
            MyMoney App
          </Link>
          <p className="line-clamp-2 text-[14px] font-light text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            deserunt repellendus provident quam a consequuntur fugiat, est
            voluptate aut dolore itaque asperiores rerum voluptatem maxime?
            Mollitia non facere ut voluptates! s
          </p>
        </div>
      </div>
    </div>
  );
}
