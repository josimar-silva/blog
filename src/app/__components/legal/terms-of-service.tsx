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
  const lastUpdated = "January 21, 2025";

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
              <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using this website (johndoe.dev), you accept
                and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do
                not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the
                materials on this website for personal, non-commercial
                transitory viewing only. This is the grant of a license, not a
                transfer of title, and under this license you may not:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Modify or copy the materials</li>
                <li>
                  • Use the materials for any commercial purpose or for any
                  public display (commercial or non-commercial)
                </li>
                <li>
                  • Attempt to decompile or reverse engineer any software
                  contained on the website
                </li>
                <li>
                  • Remove any copyright or other proprietary notations from the
                  materials
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                This license shall automatically terminate if you violate any of
                these restrictions and may be terminated by me at any time. Upon
                terminating your viewing of these materials or upon the
                termination of this license, you must destroy any downloaded
                materials in your possession whether in electronic or printed
                format.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Content and Intellectual Property
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All content on this website, including but not limited to text,
                graphics, logos, images, and software, is my property or the
                property of content suppliers and is protected by copyright and
                other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold mb-3">Blog Content</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The blog posts and articles on this website are my original work
                unless otherwise noted. You may:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Share links to articles with proper attribution</li>
                <li>
                  • Quote brief excerpts with proper attribution and links back
                  to the original
                </li>
                <li>
                  • Use the content for educational or research purposes with
                  proper citation
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">Code Examples</h3>
              <p className="text-muted-foreground leading-relaxed">
                Code examples and snippets shared in blog posts are provided for
                educational purposes and may be used freely in your projects,
                though attribution is appreciated.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When using this website, you agree not to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Use the website for any unlawful purpose or to solicit
                  others to perform unlawful acts
                </li>
                <li>
                  • Violate any international, federal, provincial, or state
                  regulations, rules, laws, or local ordinances
                </li>
                <li>
                  • Infringe upon or violate my intellectual property rights or
                  the intellectual property rights of others
                </li>
                <li>
                  • Harass, abuse, insult, harm, defame, slander, disparage,
                  intimidate, or discriminate
                </li>
                <li>• Submit false or misleading information</li>
                <li>• Upload viruses or any other type of malicious code</li>
                <li>• Spam or send unsolicited messages</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Comments and User-Generated Content
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If this website allows comments or other user-generated content
                in the future:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You retain ownership of content you submit</li>
                <li>
                  • You grant me a non-exclusive license to use, modify, and
                  display your content
                </li>
                <li>• You are responsible for the content you submit</li>
                <li>
                  • I reserve the right to remove any content at my discretion
                </li>
                <li>• Comments must be respectful and relevant to the topic</li>
              </ul>
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
              <p className="text-muted-foreground leading-relaxed">
                Further, I do not warrant or make any representations concerning
                the accuracy, likely results, or reliability of the use of the
                materials on its website or otherwise relating to such materials
                or on any sites linked to this site.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall John Doe or its suppliers be liable for any
                damages (including, without limitation, damages for loss of data
                or profit, or due to business interruption) arising out of the
                use or inability to use the materials on this website, even if I
                or my authorized representative has been notified orally or in
                writing of the possibility of such damage. Because some
                jurisdictions do not allow limitations on implied warranties, or
                limitations of liability for consequential or incidental
                damages, these limitations may not apply to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on this website could include technical,
                typographical, or photographic errors. I do not warrant that any
                of the materials on its website are accurate, complete, or
                current. I may make changes to the materials contained on its
                website at any time without notice. However, I do not make any
                commitment to update the materials.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                I have not reviewed all of the sites linked to this website and
                am not responsible for the contents of any such linked site. The
                inclusion of any link does not imply endorsement by me of the
                site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                I may revise these terms of service for its website at any time
                without notice. By using this website, you are agreeing to be
                bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in
                accordance with the laws of California, United States, and you
                irrevocably submit to the exclusive jurisdiction of the courts
                in that state or location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please
                contact me:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Email: hello@johndoe.com</li>
                <li>• Website: johndoe.dev/contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
