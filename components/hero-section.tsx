import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px] gap-6">
          {/* Photo - appears first on mobile, second on desktop */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="John Doe"
              width={300}
              height={300}
              className="aspect-square overflow-hidden rounded-full object-cover"
            />
          </div>

          {/* Content - appears second on mobile, first on desktop */}
          <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hi, I'm John Doe</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Full-stack developer, writer, and creator. I write about web development, technology, and building
                products that matter.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild>
                <Link href="/blog">
                  Read My Blog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">About Me</Link>
              </Button>
            </div>
            <div className="flex items-center space-x-4 pt-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
