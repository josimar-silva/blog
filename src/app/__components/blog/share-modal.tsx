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

"use client";

import {
  Check,
  Copy,
  Linkedin,
  Mail,
  MessageCircle,
  Send,
  Share2,
  Twitter,
} from "lucide-react";
import { useState } from "react";
import {
  EmailShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import { Button } from "@/app/__components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/__components/ui/dialog";
import { Input } from "@/app/__components/ui/input";
import { Label } from "@/app/__components/ui/label";
import { Separator } from "@/app/__components/ui/separator";
import { useToast } from "@/app/__components/ui/use-toast";
import config from "@/lib/config";

interface ShareModalProps {
  title: string;
  slug: string;
}

const ShareModal = ({ title, slug }: ShareModalProps) => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const shareUrl = `${config.siteUrl}/blog/${slug}`;

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setCopied(true);
        toast({
          title: "Link copied!",
          description: "The post link has been copied to your clipboard.",
        });
      })
      .catch(() => {
        toast({
          title: "Copy failed",
          description:
            "Could not copy link. Please copy manually from the input field.",
          variant: "destructive",
        });
      });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Post</DialogTitle>
          <DialogDescription>
            Share this post with your friends.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={shareUrl} readOnly />
          </div>
          <Button
            type="submit"
            size="sm"
            className="px-3"
            onClick={handleCopyLink}
          >
            <span className="sr-only">Copy Link</span>
            {copied ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>
        <Separator />
        <div className="flex justify-center gap-4 py-2">
          <TwitterShareButton
            url={shareUrl}
            title={title}
            className="flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            aria-label="Share on Twitter"
          >
            <Twitter className="h-5 w-5" />
          </TwitterShareButton>
          <LinkedinShareButton
            url={shareUrl}
            title={title}
            className="flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            className="flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            aria-label="Share on WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </WhatsappShareButton>
          <TelegramShareButton
            url={shareUrl}
            title={title}
            className="flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            aria-label="Share on Telegram"
          >
            <Send className="h-5 w-5" />
          </TelegramShareButton>
          <EmailShareButton
            url={shareUrl}
            subject={title}
            className="flex items-center justify-center rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
            aria-label="Share via Email"
          >
            <Mail className="h-5 w-5" />
          </EmailShareButton>
        </div>
        <DialogClose />
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;
