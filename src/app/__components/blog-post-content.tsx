"use client"

import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark, materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "next-themes";

interface BlogPostContentProps {
    content: string;
}

export default function BlogPostContent({ content }: BlogPostContentProps) {
    const { theme } = useTheme(),
     [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Render nothing on the server to prevent hydration mismatch
    }

    const codeStyle = theme === "dark" ? materialDark : materialLight;

    return (
        <div className="prose prose-gray max-w-none dark:prose-invert lg:prose-lg markdown-content">
            <Markdown
                remarkPlugins={[remarkFrontmatter, remarkGfm, remarkMath]}
                rehypePlugins={[rehypeRaw]}
                components={{
                    code({ _node, className, children: codeChildren, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");

                        return match ? (
                            <SyntaxHighlighter
                                // @ts-ignore
                                style={codeStyle}
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
