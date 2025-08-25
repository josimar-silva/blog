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

export function NowContent() {
  const lastUpdated = "January 2025";

  return (
    <section className="pb-16 md:pb-20">
      <div className="container px-4 md:px-6 max-w-2xl">
        <div className="prose prose-gray max-w-none dark:prose-invert lg:prose-lg">
          <div className="space-y-8">
            {/* Work */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Work</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm currently working as a Senior Full-Stack Developer at
                TechCorp, leading a team of 4 developers on a major product
                redesign that serves over 100k users. We're rebuilding the
                entire frontend with React and TypeScript while modernizing our
                Node.js backend infrastructure.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                On the side, I'm exploring opportunities in the AI/ML space and
                considering a transition into developer relations or technical
                writing roles.
              </p>
            </div>

            {/* Learning */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Learning</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm diving deep into Rust after participating in the Rinha de
                Backend challenge. The language's performance characteristics
                and memory safety model have me excited about systems
                programming again.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm also experimenting with AI-assisted development using tools
                like GitHub Copilot and Gemini CLI, trying to understand how to
                use these tools effectively without becoming dependent on them.
              </p>
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Current Projects</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Working on a new open-source rate limiting library for Node.js
                that I hope to release this quarter. It's designed to be more
                flexible and performant than existing solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm also redesigning this website to better showcase my writing
                and projects, with a focus on performance and accessibility.
              </p>
            </div>

            {/* Reading */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Reading</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently reading "Designing Data-Intensive Applications" by
                Martin Kleppmann for the second time - it's one of those books
                that reveals new insights on each read.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm also following the latest developments in React Server
                Components and the evolving JavaScript ecosystem through various
                newsletters and technical blogs.
              </p>
            </div>

            {/* Life */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Life</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Living in San Francisco and really enjoying the tech community
                here. I've been attending more local meetups and conferences,
                which has been great for networking and learning from other
                developers.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I've gotten back into cycling and try to ride around the city on
                weekends. It's a great way to explore different neighborhoods
                and get some exercise away from the computer.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Trying to maintain a better work-life balance by setting
                boundaries around work hours and being more intentional about
                how I spend my free time.
              </p>
            </div>

            {/* Goals */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Goals for 2025</h2>
              <ul className="space-y-2 text-lg text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Publish at least 12 technical blog posts</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Release 2 open-source projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Speak at a technical conference</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                  <span>
                    Learn Rust well enough to build a production application
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                  <span>Cycle 500 miles throughout the year</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              This page was last updated in <strong>{lastUpdated}</strong>.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Inspired by{" "}
              <a
                href="https://nownownow.com/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Derek Sivers' now page movement
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
