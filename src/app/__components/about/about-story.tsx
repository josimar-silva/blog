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

export function AboutStory() {
  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              My Story
            </h2>
            <p className="text-xl text-muted-foreground">
              From curious beginner to passionate developer
            </p>
          </div>

          <div className="space-y-8">
            <div className="prose prose-gray max-w-none dark:prose-invert lg:prose-lg">
              <p>
                My journey into web development started during college when I
                built my first website using HTML and CSS. What began as a
                simple curiosity quickly turned into a passion as I discovered
                the power of creating interactive experiences on the web.
              </p>

              <p>
                After graduating with a Computer Science degree, I dove
                headfirst into the world of JavaScript and modern web
                frameworks. I was fascinated by how React could make complex
                user interfaces feel intuitive and responsive. This led me to
                specialize in full-stack development, learning Node.js and
                various databases to build complete web applications.
              </p>

              <p>
                Over the years, I&apos;ve had the privilege of working with
                startups and established companies, helping them bring their
                digital visions to life. Each project has taught me something
                new, whether it&apos;s a cutting-edge technology, a better way
                to solve problems, or the importance of user-centered design.
              </p>

              <p>
                Today, I&apos;m passionate about sharing my knowledge through
                writing and open source contributions. I believe that the best
                way to grow as a developer is to help others learn and succeed.
                When I&apos;m not coding, you&apos;ll find me exploring new
                technologies, reading about industry trends, or working on side
                projects that push my skills to new limits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
