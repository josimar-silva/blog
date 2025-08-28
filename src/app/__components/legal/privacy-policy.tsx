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

export function PrivacyPolicy() {
  const lastUpdated = "August 28, 2025";

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to me. I believe such information is
              yours and yours alone. This blog does not collect any personal
              information from its users or transmit your personal details, nor
              do we include any advertising or analytics software that talks to
              third parties.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert lg:prose-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                No Information Collected
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I do not collect, store, or share any personal data from
                visitors. This blog is purely for informational purposes. There
                are no contact forms, comment sections, or user accounts.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Third-Party Services (Cloudflare)
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website uses Cloudflare to enhance security and
                performance. Cloudflare may collect standard web traffic logs,
                including IP addresses, to provide its services. This is a
                necessary function for protecting the site from malicious
                activity and ensuring reliable content delivery.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For more details on what Cloudflare collects, please review{" "}
                <a
                  href="https://www.cloudflare.com/privacypolicy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Cloudflare's Privacy Policy
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website does not use cookies for tracking or analytics. Any
                cookies present are strictly for essential functions, such as
                those set by Cloudflare for security purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this privacy policy, please
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
