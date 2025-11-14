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

import type React from "react";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

/**
 * Mock implementation of MarkdownContent for testing.
 * Renders markdown as HTML for testing purposes.
 */
export function MarkdownContent({
  content,
  className = "prose prose-gray max-w-none dark:prose-invert lg:prose-lg",
}: Readonly<MarkdownContentProps>) {
  const renderMarkdownToHtml = (markdown: string): React.JSX.Element => {
    const lines = markdown.split("\n");
    const elements: React.JSX.Element[] = [];
    let listItems: string[] = [];
    let codeBlock: string[] = [];
    let inCodeBlock = false;

    const flushListItems = () => {
      if (listItems.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} role="list">
            {listItems.map((item, i) => (
              <li key={i}>{processInlineMarkdown(item)}</li>
            ))}
          </ul>,
        );
        listItems = [];
      }
    };

    const flushCodeBlock = () => {
      if (codeBlock.length > 0) {
        elements.push(
          <pre key={`code-${elements.length}`}>
            <code>{codeBlock.join("\n")}</code>
          </pre>,
        );
        codeBlock = [];
        inCodeBlock = false;
      }
    };

    const processInlineMarkdown = (text: string): React.JSX.Element => {
      // Handle links [text](url)
      let result: (string | React.JSX.Element)[] = [text];

      // Process links
      result = result.flatMap((part) => {
        if (typeof part !== "string") return part;
        const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
        const parts: (string | React.JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = linkRegex.exec(part)) !== null) {
          if (match.index > lastIndex) {
            parts.push(part.substring(lastIndex, match.index));
          }
          parts.push(
            <a key={match.index} href={match[2]}>
              {match[1]}
            </a>,
          );
          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < part.length) {
          parts.push(part.substring(lastIndex));
        }

        return parts.length > 0 ? parts : [part];
      });

      // Process bold **text**
      result = result.flatMap((part) => {
        if (typeof part !== "string") return part;
        const boldRegex = /\*\*([^*]+)\*\*/g;
        const parts: (string | React.JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = boldRegex.exec(part)) !== null) {
          if (match.index > lastIndex) {
            parts.push(part.substring(lastIndex, match.index));
          }
          parts.push(<strong key={match.index}>{match[1]}</strong>);
          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < part.length) {
          parts.push(part.substring(lastIndex));
        }

        return parts.length > 0 ? parts : [part];
      });

      // Process italic _text_
      result = result.flatMap((part) => {
        if (typeof part !== "string") return part;
        const italicRegex = /_([^_]+)_/g;
        const parts: (string | React.JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = italicRegex.exec(part)) !== null) {
          if (match.index > lastIndex) {
            parts.push(part.substring(lastIndex, match.index));
          }
          parts.push(<em key={match.index}>{match[1]}</em>);
          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < part.length) {
          parts.push(part.substring(lastIndex));
        }

        return parts.length > 0 ? parts : [part];
      });

      // Process inline code `code`
      result = result.flatMap((part) => {
        if (typeof part !== "string") return part;
        const codeRegex = /`([^`]+)`/g;
        const parts: (string | React.JSX.Element)[] = [];
        let lastIndex = 0;
        let match;

        while ((match = codeRegex.exec(part)) !== null) {
          if (match.index > lastIndex) {
            parts.push(part.substring(lastIndex, match.index));
          }
          parts.push(<code key={match.index}>{match[1]}</code>);
          lastIndex = match.index + match[0].length;
        }

        if (lastIndex < part.length) {
          parts.push(part.substring(lastIndex));
        }

        return parts.length > 0 ? parts : [part];
      });

      return <>{result}</>;
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check for code block start/end
      if (line.startsWith("```")) {
        if (!inCodeBlock) {
          flushListItems();
          inCodeBlock = true;
        } else {
          flushCodeBlock();
        }
        continue;
      }

      if (inCodeBlock) {
        codeBlock.push(line);
        continue;
      }

      // Handle headings
      if (line.startsWith("# ")) {
        flushListItems();
        elements.push(
          <h1 key={i}>{processInlineMarkdown(line.substring(2))}</h1>,
        );
      } else if (line.startsWith("## ")) {
        flushListItems();
        elements.push(
          <h2 key={i}>{processInlineMarkdown(line.substring(3))}</h2>,
        );
      } else if (line.startsWith("### ")) {
        flushListItems();
        elements.push(
          <h3 key={i}>{processInlineMarkdown(line.substring(4))}</h3>,
        );
      } else if (line.startsWith("- ")) {
        // List item
        listItems.push(line.substring(2));
      } else if (line.startsWith("> ")) {
        // Blockquote
        flushListItems();
        elements.push(
          <blockquote key={i}>
            {processInlineMarkdown(line.substring(2))}
          </blockquote>,
        );
      } else if (line.trim() === "") {
        // Empty line
        flushListItems();
      } else {
        // Regular paragraph
        flushListItems();
        elements.push(<p key={i}>{processInlineMarkdown(line)}</p>);
      }
    }

    flushListItems();
    flushCodeBlock();

    return <>{elements}</>;
  };

  return (
    <div className={className} data-testid="markdown-content">
      {renderMarkdownToHtml(content)}
    </div>
  );
}
