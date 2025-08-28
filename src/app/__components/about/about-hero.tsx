/**
 * MIT License
 *
 * Copyright (c) 2025 Josimar Silva
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Calendar, Download, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/app/__components/ui/button";

export function AboutHero() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
                Full-stack developer with a passion for creating exceptional
                digital experiences
              </p>
              <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>10+ years experience</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                I&apos;m a passionate full-stack developer who loves building
                products that make a difference. With over 5 years of experience
                in web development, I specialize in React, TypeScript, and
                Node.js, creating scalable applications that users love.
              </p>
              <p className="text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me writing technical
                articles, contributing to open source, or exploring the latest
                technologies. I believe in continuous learning and sharing
                knowledge with the developer community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link
                  href="/docs/resume.pdf"
                  download
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <Image
                src="/assets/me.jpg"
                alt="Josimar Silva - Professional Photo"
                width={400}
                height={500}
                className="aspect-4/5 overflow-hidden rounded-2xl object-cover"
              />
              <div className="absolute inset-0 rounded-2xl bg-linear-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
