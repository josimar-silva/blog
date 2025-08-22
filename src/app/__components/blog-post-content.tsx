import React from "react";
import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface BlogPostContentProps {
    content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
    return (
        <div className="prose prose-gray max-w-none dark:prose-invert lg:prose-lg markdown-content">
            <Markdown
                remarkPlugins={[remarkFrontmatter, remarkGfm, remarkMath]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ node, className, children: codeChildren, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");

                        return match ? (
                            <SyntaxHighlighter
                                // @ts-ignore
                                style={materialDark}
                                PreTag="div"
                                language={match[1]}
                                {...props}
                            >
                                {String(codeChildren).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...props}>
                                {codeChildren}
                            </code>
                        );
                    },
                }}
            >
                {content}
            </Markdown>
        </div>
    );
}