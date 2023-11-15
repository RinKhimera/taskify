import { cn } from "@/lib/utils"
import localFont from "next/font/local"
import Image from "next/image"
import Link from "next/link"

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
})

export const Logo = () => {
  return (
    <Link href="/">
      <div className="hidden items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="logo.svg" alt="Logo" height={30} width={30} />
        <p className={cn("text-lg text-neutral-700", headingFont.className)}>
          Taskify
        </p>
      </div>
    </Link>
  )
}
