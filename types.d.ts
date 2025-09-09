// next-mdx-remote
declare module 'next-mdx-remote' {
  import type { ComponentType, ReactNode } from 'react';

  export type MDXRemoteSerializeResult = any; // fallback type
  export const MDXRemote: ComponentType<{ compiledSource?: string; [key: string]: any }>;
}

// next-mdx-remote/serialize
declare module 'next-mdx-remote/serialize' {
  export function serialize(
    source: string,
    options?: Record<string, any>
  ): Promise<any>;
}

// @mdx-js/react
declare module '@mdx-js/react' {
  import type { ComponentType, ReactNode } from 'react';
  export const MDXProvider: ComponentType<{
    components?: Record<string, ComponentType<any>>;
    children: ReactNode;
  }>;
}

// react-syntax-highlighter
declare module 'react-syntax-highlighter/dist/cjs/styles/prism' {
  const content: Record<string, any>;
  export = content;
}

// gray-matter
declare module 'gray-matter' {
  export default function grayMatter(
    input: string,
    options?: Record<string, any>
  ): { content: string; data: Record<string, any>; [key: string]: any };
}

