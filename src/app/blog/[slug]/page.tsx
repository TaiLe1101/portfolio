import CommentWithGithub from "@/app/blog/components/comment-with-github/comment-with-github";
import { BlogCard } from "@/components/blog-card/blog-card";
import BlurText from "@/components/BlurText";
import { Container } from "@/components/container/container";
import ShinyText from "@/components/ShinyText";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  AtSign,
  Ellipsis,
  Facebook,
  Link as LinkIcon,
  SquareTerminal,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DetailBlogPage() {
  return (
    <Container>
      <div className="ml-[15%]">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Tìm hiểu về React Hooks</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-start">
        <div className="w-[calc(15%)] sticky top-20 p-2">
          <p className="text-[16px] font-bold">
            <Link href="/resume">Lê Trần Tấn Tài</Link>
          </p>
          <p className="flex items-center gap-x-2 text-[14px] mt-2">
            Tôi là kỹ sư phần mềm <SquareTerminal />
          </p>
          <Separator className="my-4" />
        </div>

        <div className="w-[calc(60%)] p-2">
          <section>
            <h1 className="mb-6">
              <BlurText
                text="Tìm hiểu về React Hooks Tìm hiểu về React Hooks Tìm hiểu về React Hooks Tìm hiểu về React Hooks Tìm hiểu về React Hooks Tìm hiểu về React Hooks Tìm hiểu về React Hooks"
                delay={200}
                animateBy="words"
                direction="top"
              />
            </h1>
            <p className="font-semibold text-[16px] text-blue-400">
              <BlurText
                text="React Hooks là một tính năng mạnh mẽ giúp bạn sử dụng state và các tính năng khác của React mà không cần viết class."
                delay={200}
                animateBy="words"
                direction="top"
              />
            </p>
          </section>

          <section className="my-4">
            <div className="flex items-center justify-between">
              {/* Avatar */}
              <div className="flex items-start gap-x-4">
                <Link
                  href="/resume"
                  className="block w-15 h-15 rounded-full p-1 bg-black/10 dark:bg-white/50 overflow-hidden"
                >
                  <Image
                    src="/images/devt.jpg"
                    alt="DevT"
                    width={60}
                    height={60}
                    className="w-full h-full rounded-[inherit]"
                  ></Image>
                </Link>

                <div>
                  <div className="flex items-center gap-x-1">
                    <Link href="/resume">
                      <ShinyText
                        text="Lê Trần Tấn Tài"
                        speed={2}
                        delay={0}
                        spread={120}
                        className="text-[16px] font-semibold"
                      />
                    </Link>
                    <span className="mb-1">👑</span>
                  </div>
                  <p className="mt-2 text-[14px] font-light text-black/50 dark:text-gray-300">
                    11-01-2026 · 15 phút đọc
                  </p>
                </div>
              </div>

              {/* Share */}
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Ellipsis />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    <DropdownMenuGroup>
                      <DropdownMenuItem className="cursor-pointer">
                        <Facebook /> Chia sẻ bài viết với Facebook
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <Twitter /> Chia sẻ bài viết với Twitter
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <AtSign /> Chia sẻ bài viết với Email
                      </DropdownMenuItem>
                      <DropdownMenuItem className="cursor-pointer">
                        <LinkIcon /> Sao chép liên kết bài viết
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </section>

          <section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            distinctio qui ut, quas earum veritatis atque perferendis quibusdam
            iusto molestias dicta modi ullam rem possimus libero placeat itaque
            ducimus delectus. Suscipit doloribus quasi inventore sapiente
            repellendus dolore ratione nisi, quaerat dolor quibusdam quia
            aliquam veniam numquam nesciunt tenetur qui iusto odio corrupti?
            Esse alias molestiae itaque omnis sapiente ut in. Temporibus alias
            ullam ut qui dignissimos deserunt tempore fuga illum iure obcaecati
            explicabo tempora maxime vel nesciunt eligendi maiores assumenda,
            delectus dolores facere corrupti optio enim consectetur? Libero,
            modi velit! Vero beatae rerum soluta quo error repellat optio harum.
            Debitis veniam dolorum dolor tenetur modi. Ea, reiciendis omnis
            labore recusandae obcaecati maxime laudantium perferendis quaerat,
            corporis, hic at repellendus. Molestiae? Rem, facere aspernatur?
            Mollitia, quae? Quos vero voluptatibus saepe, omnis praesentium
            aliquid unde optio autem eveniet neque distinctio non minus eaque
            corporis tempore incidunt repellendus quisquam possimus rerum
            adipisci veniam? Saepe ab repellat laudantium, facere laborum
            praesentium distinctio in rem atque, dolore nihil asperiores aliquam
            porro necessitatibus expedita illum minus quidem dignissimos error.
            Saepe quaerat illum ratione aperiam. Totam, deserunt! Corporis
            perspiciatis ut dolore voluptatem qui magni omnis eum aliquid
            excepturi itaque vel voluptas sunt quaerat reiciendis laboriosam
            aperiam est, quae iusto culpa vero ipsum voluptates? Provident quod
            pariatur velit. Vero voluptates maxime ex vitae fugit totam
            necessitatibus, vel delectus ad? Illo recusandae, inventore in ea
            asperiores consectetur nihil, officiis incidunt voluptatem impedit
            fugit assumenda? Nobis officiis sequi a blanditiis. Vel, nesciunt
            perspiciatis molestiae, rem aliquid quidem repudiandae est eveniet
            magni itaque sed quod ducimus similique deleniti voluptates
            excepturi soluta totam eius et nostrum voluptas repellendus
            repellat. Nam, pariatur ducimus. Distinctio iusto odit aliquid
            incidunt voluptas modi, unde nemo impedit! Vel officia rerum
            exercitationem, quaerat eius architecto voluptate consequatur, at
            minus id iste rem incidunt. Ad molestiae odit pariatur laboriosam!
            Facilis omnis nihil nam quae suscipit dicta odio laborum molestias
            in accusamus reprehenderit officia, impedit enim soluta fugit
            deleniti? Debitis quam consequuntur laborum enim fugit eligendi
            consectetur ratione nemo quae. Ad accusantium consequuntur similique
            dolorem sed laborum eligendi magnam odio commodi ipsum minima
            delectus, corporis eos reiciendis doloremque veritatis nostrum
            alias, voluptate rerum at nobis illo unde natus! Unde, aut? Dolorem
            voluptates velit aliquid ipsum consequuntur laudantium modi itaque
            quae inventore libero vel in tempore aliquam beatae, ullam deleniti
            ducimus ad nam animi suscipit pariatur nulla repellat possimus
            numquam. Voluptatum! Sit, cum libero voluptate veniam commodi
            incidunt, expedita, enim explicabo praesentium ipsam aperiam? Minus
            magnam amet, velit qui quaerat nulla excepturi possimus in est atque
            repellendus nobis laborum culpa! Quos. Vero, saepe. Aliquid ad
            iusto, eaque ducimus repellendus itaque nulla consequatur dolore,
            harum quidem nemo eius vel aperiam laboriosam magni minus? Molestiae
            cum esse illo ab repudiandae. Eum, labore repudiandae? Sunt et animi
            quo officiis debitis perspiciatis totam aut, recusandae fugiat
            veritatis doloremque facilis, optio rerum corrupti at ipsam enim.
            Quam ducimus modi quae soluta repudiandae sapiente necessitatibus
            amet quibusdam! Temporibus explicabo, officia voluptate est, dolores
            aliquam dolorem veniam architecto quia cupiditate praesentium natus.
            Architecto tempore officiis quod animi placeat optio consequuntur.
            Voluptatem mollitia asperiores exercitationem quos commodi nobis
            totam. Explicabo, temporibus atque? Modi numquam excepturi nulla id
            neque odit voluptatum consequatur placeat fugit. Facilis ipsa, porro
            impedit sunt possimus accusamus et nemo, quas accusantium
            perferendis dolorem, odio praesentium perspiciatis. Provident quia
            maiores, incidunt, optio iusto aliquid ipsa praesentium eum,
            voluptas nesciunt esse iure consequatur? Quisquam dignissimos ut
            modi. Vitae eaque eligendi nulla praesentium corrupti deserunt
            tempora assumenda velit placeat. Aspernatur praesentium
            reprehenderit ratione sequi quam? Ut sequi officia fugit accusamus
            quasi accusantium unde nam possimus! Distinctio ipsum iste id minima
            in nulla hic, vero harum neque laudantium dignissimos adipisci.
            Labore velit at architecto possimus reiciendis recusandae odit
            dolore! Adipisci autem repellat asperiores id. Doloribus facere,
            odio dignissimos ut laboriosam dolore quia veritatis labore totam
            placeat exercitationem. Ratione, placeat magni. Rem earum iure
            pariatur eaque error itaque explicabo, natus nobis necessitatibus
            recusandae, atque sed rerum reprehenderit molestias laborum quos
            eligendi. At reprehenderit mollitia autem ducimus rem impedit quod
            tempore deleniti! Laudantium ratione laboriosam, esse dolor nihil
            obcaecati aut excepturi cumque dignissimos quis doloremque iure ad?
            Tempore illum, vitae dicta perferendis sequi tenetur tempora placeat
            quam a qui omnis, ut sint! Corporis, recusandae. Impedit animi vero
            odio minima! Ea expedita porro odio? Sapiente, hic ea? Enim minima
            earum ex. Voluptates doloribus sit aut ad distinctio nostrum eos
            ullam accusamus itaque at! Quos dolor nulla ea aliquam earum
            accusantium sed ducimus illum obcaecati! Debitis odio doloremque
            optio animi veniam ducimus iure, quidem illum natus reiciendis,
            tenetur, nesciunt ipsum architecto quia vel ea! Doloribus amet ipsam
            at asperiores possimus incidunt suscipit? Natus vel labore dolorem
            voluptatibus molestiae, perferendis quas quidem necessitatibus
            tempore eos aut optio omnis consectetur quod nobis at. Odit, ullam
            deserunt. Quas ipsum possimus modi? Necessitatibus a fuga suscipit
            quaerat iure, facilis fugit blanditiis commodi, repellat laudantium
            accusamus ipsum aspernatur tempore accusantium velit repudiandae
            quisquam maiores. Ipsam esse earum voluptas perspiciatis. Quod
            laboriosam illo quam numquam accusamus, aspernatur natus sit eos
            explicabo officiis doloremque, itaque fugit temporibus ea cupiditate
            dolore ab, adipisci doloribus ex! Hic neque minima reprehenderit
            explicabo modi exercitationem. Tempora, iure distinctio deleniti
            voluptas ea doloremque soluta est asperiores? Quaerat quisquam
            voluptatibus dignissimos facilis aliquid, cupiditate repellat
            veritatis dolorum quibusdam, nobis necessitatibus rem, aspernatur
            quae? Tenetur ratione totam modi. Fuga distinctio dolores ut! Quis
            laborum labore soluta deserunt libero porro, debitis necessitatibus
            voluptas omnis, illo dolorem nisi, vero molestias sunt maiores.
            Velit fugiat aspernatur tenetur veritatis adipisci, voluptates
            dignissimos? Tempora libero vero esse aliquam commodi magni adipisci
            eveniet deleniti sunt eligendi, error maiores reiciendis quod
            nesciunt veritatis hic sapiente voluptatum necessitatibus sint earum
            perspiciatis. Repellendus, expedita! Ad, minus excepturi. Quam dolor
            cumque exercitationem pariatur, eaque iusto neque? Magni incidunt
            impedit nisi eos repudiandae! Quidem deserunt eos assumenda
            reprehenderit maiores quaerat numquam atque ducimus perspiciatis
            perferendis sit, provident libero consequuntur. Eaque dolor,
            voluptatibus nobis dolorum, error eum ut consequuntur recusandae
            sequi modi, mollitia tempore laboriosam quisquam deserunt asperiores
            optio quibusdam reprehenderit! Ipsa vero laborum quas iure aliquid
            sunt veritatis quos. Placeat nemo, nesciunt, magni minus impedit
            veniam quaerat vero cum velit libero consequatur. Eaque non culpa
            illo delectus temporibus explicabo dolores impedit reiciendis
            repellat corporis. Blanditiis nesciunt iure sit rerum? Laborum
            inventore eum dolorem itaque ducimus, soluta delectus amet non quasi
            vel id mollitia exercitationem incidunt autem nobis consequatur!
            Alias sit officia pariatur recusandae, vel sunt porro provident. Ab,
            velit! Sapiente libero rerum, distinctio delectus eligendi
            exercitationem ea eaque vero officiis, nam recusandae omnis qui quos
            voluptate fugiat! Adipisci illo esse saepe enim porro facere omnis
            possimus unde voluptate ab. Accusantium, expedita obcaecati? Itaque
            excepturi placeat ullam. Sed eum deserunt sequi perferendis,
            consectetur doloremque id et eos fugit dignissimos saepe aperiam,
            enim quibusdam accusantium, libero est quo cum commodi! Molestiae.
            Eaque repellendus, quidem adipisci fugit ipsam accusantium quis
            magnam, cupiditate ad earum sunt dolorem voluptatibus beatae
            consectetur suscipit facilis distinctio dolore? Earum eius quos, ab
            dicta adipisci hic sapiente voluptate. Nostrum est delectus
            perferendis eius officiis necessitatibus nisi, tenetur minima quod
            deserunt accusamus repellat illum sint rerum? Minus soluta suscipit
            magnam laudantium cupiditate obcaecati voluptatibus accusantium
            voluptatem? Qui, ad quo! Nobis culpa, ipsa nemo, veniam libero
            labore dolor expedita, enim non cupiditate eligendi. Consectetur
            quos assumenda, quisquam ratione saepe nulla magni sequi aperiam ex
            ad architecto vitae doloremque delectus quaerat. Suscipit, quos quia
            dolores repudiandae dolorem mollitia quidem necessitatibus
            temporibus quasi? Vitae libero eos quas quis nisi architecto quo
            laudantium, nobis iusto! Quas recusandae nemo magnam, earum esse cum
            laudantium? Quidem nisi doloribus ratione, nulla qui repellendus.
            Illum error doloremque dignissimos incidunt possimus accusamus in
            assumenda earum? Velit at laborum ullam nihil deleniti libero
            molestiae provident, ex quae minima enim? Deserunt, omnis assumenda
            nostrum cumque delectus, maxime harum numquam tenetur illum ducimus
            cupiditate? Sit, sed incidunt quis quisquam nulla, totam distinctio
            facere saepe dicta dolor molestias. Nostrum ea odio iure! Delectus
            maxime eum assumenda? Perferendis enim ipsam eligendi similique!
            Pariatur, ratione reiciendis ut porro labore, magni voluptatum eius
            veritatis quasi iste nobis? Neque vitae iure, atque illum ducimus
            dicta commodi? Porro velit officiis adipisci suscipit nemo iusto, a
            dignissimos provident dicta corrupti nulla nesciunt dolorem
            repudiandae in placeat ratione libero molestias doloremque veniam
            quia nihil aut magni? Officia, dignissimos dolorem. Delectus nemo
            excepturi consectetur. Animi unde quibusdam, accusantium cupiditate
            obcaecati porro. Vel cupiditate illo ipsam quisquam quaerat
            repellendus ad magni perspiciatis facilis ea nostrum voluptas
            quidem, reiciendis similique mollitia qui! Illo iste iusto iure
            dolorem facere earum perspiciatis. Consectetur placeat aspernatur
            nostrum ipsam pariatur, mollitia eos doloremque dolor expedita
            provident, dolorem beatae laudantium quos, minima consequuntur ut
            rerum laboriosam distinctio? Assumenda, consequuntur libero cumque
            laudantium doloremque pariatur consectetur sit aperiam,
            reprehenderit eius amet ullam, architecto id magnam molestias
            perspiciatis sint odit? Debitis soluta enim ducimus voluptatem odit
            ratione architecto blanditiis. Quasi aspernatur corporis quaerat
            quos. Quam eaque ea sunt, quibusdam exercitationem, culpa, quasi
            neque asperiores quos reiciendis tenetur. Tenetur, error recusandae!
            Ducimus laborum, itaque voluptate animi amet eum corrupti!
            Voluptates. Ea quaerat id quod quisquam, ipsam hic tempore autem
            vitae adipisci officia. Aut error, repellendus ipsum possimus cum
            accusantium non laudantium maiores veniam repellat exercitationem
            molestiae animi quidem eius dolorem.
          </section>

          <section>
            <CommentWithGithub />
          </section>
        </div>
        <div className="w-[calc(25%)] sticky top-20 p-2">
          <div>
            <p className="text-[16px]">Các bài viết liên quan</p>

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
        </div>
      </div>
    </Container>
  );
}
