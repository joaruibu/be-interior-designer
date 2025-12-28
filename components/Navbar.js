import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  { name: "Bloques", href: "/descarga-bloques-autocad" },
  { name: "Sobre mí", href: "/about" },
  // { name: "Blog", href: "/blog" },
];

export default function Navbar() {
  const { pathname } = useRouter();

  return (
    <header>
      <nav
        className=" mx-auto flex max-w-4xl items-center justify-between h-16 pt-6 sm:px-8"
        aria-label="Global"
      >
        <div className=" flex items-center w-full justify-between ">
          <Link href="/" prefetch={false} className=" flex items-center gap-x-2 text-black ">

            <span className="sr-only">Be Interior Designer</span>
            <span className=" hidden sm:block sm:text-2xl font-bold text-bid-wine font-bigilla">
              Be Interior Designer
            </span>
            <span className=" block sm:hidden text-3xl font-bold text-bid-wine font-bigilla">
              BID
            </span>

          </Link>
          <div className="flex gap-x-4">
            {navigation.map((item) => (
              <Link
                href={item.href}
                key={item.name}
                prefetch={false}
                className={`text-sm sm:text-base block  h-full text-bid-wine font-playfair  hover:text-bid-sand duration-300 ${
                  item.href === pathname ? "underline" : ""
                }`}
              >

                {item.name}

              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
