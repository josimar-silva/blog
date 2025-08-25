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
  const lastUpdated = "January 21, 2025";

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy is important to me. This policy explains how I
              collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert lg:prose-lg space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Information I Collect</h2>

              <h3 className="text-xl font-semibold mb-3">
                Information You Provide
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you contact me through the contact form or email, I
                collect:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Your name and email address</li>
                <li>• Any message or information you choose to share</li>
                <li>• Any other information you voluntarily provide</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                Automatically Collected Information
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit this website, I may automatically collect:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Your IP address and general location information</li>
                <li>• Browser type and version</li>
                <li>• Pages you visit and time spent on the site</li>
                <li>• Referring website information</li>
                <li>• Device information (mobile, desktop, etc.)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                How I Use Your Information
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I use the information I collect to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Respond to your inquiries and communications</li>
                <li>• Improve the website and user experience</li>
                <li>• Analyze website traffic and usage patterns</li>
                <li>• Prevent spam and abuse</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I do not sell, trade, or otherwise transfer your personal
                information to third parties, except:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• With your explicit consent</li>
                <li>• To comply with legal requirements or court orders</li>
                <li>• To protect my rights, property, or safety</li>
                <li>• In connection with a business transfer or merger</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website may use third-party services that collect
                information:
              </p>

              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I may use analytics services (such as Google Analytics) to
                understand how visitors use the website. These services may
                collect information about your visit, including pages viewed,
                time spent, and referring sites.
              </p>

              <h3 className="text-xl font-semibold mb-3">Hosting and CDN</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website is hosted on Vercel, which may collect technical
                information about your visit. Please review Vercel's privacy
                policy for more information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This website may use cookies and similar technologies to:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Remember your preferences (such as dark/light mode)</li>
                <li>• Analyze website traffic and usage</li>
                <li>• Improve website functionality</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                You can control cookies through your browser settings. Disabling
                cookies may affect some website functionality.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                I implement appropriate security measures to protect your
                personal information against unauthorized access, alteration,
                disclosure, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure, and I
                cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                I retain personal information only as long as necessary to
                fulfill the purposes outlined in this privacy policy, unless a
                longer retention period is required or permitted by law. Contact
                information from inquiries is typically retained for up to 2
                years.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the following rights
                regarding your personal information:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  • Access: Request a copy of the personal information I hold
                  about you
                </li>
                <li>
                  • Correction: Request correction of inaccurate or incomplete
                  information
                </li>
                <li>
                  • Deletion: Request deletion of your personal information
                </li>
                <li>
                  • Portability: Request transfer of your information to another
                  service
                </li>
                <li>
                  • Objection: Object to processing of your personal information
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To exercise these rights, please contact me using the
                information provided below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                This website is not intended for children under 13 years of age.
                I do not knowingly collect personal information from children
                under 13. If I become aware that I have collected personal
                information from a child under 13, I will take steps to delete
                such information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">
                Changes to This Policy
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated "Last updated" date.
                I encourage you to review this policy periodically for any
                changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this privacy policy or how I
                handle your personal information, please contact me:
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
