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

import me from "@/lib/me";

export function NowContent() {
  return (
    <section className="pb-16 md:pb-20">
      <div className="container px-4 md:px-6 max-w-2xl">
        <div className="prose prose-gray max-w-none dark:prose-invert lg:prose-lg">
          <div className="space-y-8">
            {/* Work */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Work</h2>
              {me.now.work.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Learning */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Learning</h2>
              {me.now.learning.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Projects */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Current Projects</h2>
              {me.now.projects.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Reading */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Reading</h2>
              {me.now.reading.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Life */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Life</h2>
              {me.now.life.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Goals */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Goals for 2025</h2>
              <ul className="space-y-2 text-lg text-muted-foreground">
                {me.now.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              This page was last updated in <strong>{me.now.lastUpdated}</strong>.
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
