'use client';
import { FC, ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  language?: string;
}

const CodeBlock: FC<CodeBlockProps> = ({ children, language }) => {
  return (
    <pre className={`language-${language || 'text'}`}>
      <code>{children}</code>
    </pre>
  );
};

export default CodeBlock;
