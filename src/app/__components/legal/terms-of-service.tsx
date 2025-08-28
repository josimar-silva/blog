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

export function TermsOfService() {
  const lastUpdated = "August 28, 2025";

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-muted-foreground">
              Please read these terms carefully before using this website.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert lg:prose-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Content Licensing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this blog, including articles, images, and other
                creative works, is licensed under the{" "}
                <a
                  href="https://creativecommons.org/licenses/by-nc/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Creative Commons Attribution-NonCommercial 4.0 International
                  (CC BY-NC 4.0)
                </a>{" "}
                license. This means you are free to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>Share</strong> &mdash; copy and redistribute the
                  material in any medium or format.
                </li>
                <li>
                  <strong>Adapt</strong> &mdash; remix, transform, and build
                  upon the material.
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Under the following terms:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong>Attribution</strong> &mdash; You must give appropriate
                  credit, provide a link to the license, and indicate if changes
                  were made. You may do so in any reasonable manner, but not in
                  any way that suggests the licensor endorses you or your use.
                </li>
                <li>
                  <strong>NonCommercial</strong> &mdash; You may not use the
                  material for commercial purposes.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Code Licensing</h2>
              <p className="text-muted-foreground leading-relaxed">
                All code examples and snippets provided in blog posts are
                licensed under the{" "}
                <a
                  href="/docs/LICENSE-MIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  MIT License
                </a>
                . You are free to use this code in your own projects, both
                personal and commercial.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The materials on this website are provided on an 'as is' basis.
                I make no warranties, expressed or implied, and hereby disclaim
                and negate all other warranties including without limitation,
                implied warranties or conditions of merchantability, fitness for
                a particular purpose, or non-infringement of intellectual
                property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall I be liable for any damages (including,
                without limitation, damages for loss of data or profit, or due
                to business interruption) arising out of the use or inability to
                use the materials on this website, even if I or an authorized
                representative has been notified orally or in writing of the
                possibility of such damage.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Changes to These Terms
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I may revise these terms of service for this website at any time
                without notice. By using this website, you are agreeing to be
                bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact me:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>Email: me@josimar-silva.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
