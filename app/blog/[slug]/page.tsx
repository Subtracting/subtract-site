import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeBlock from '@/components/CodeBlock';

type Props = { params: Promise<{ slug: string }> };

const components = {
  pre: (props: any) => <div {...props} />,
  code: (props: any) => (
    <CodeBlock language={props.className?.replace('language-', '')}>
      {props.children}
    </CodeBlock>
  ),
};

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const postsDir = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDir, `${slug}.mdx`);

  try {
    const source = fs.readFileSync(filePath, 'utf-8');
    const { content, data } = matter(source);

    return (
      <article className='blog-body'>
        {data.title && <h1>{data.title}</h1>}
        {data.date && <time>{data.date}</time>}
        <MDXRemote source={content} components={components} />
      </article>
    );
  } catch (error) {
    console.error('Error loading blog post:', error);
    return <div>Blog post not found</div>;
  }
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, '')
  }));
}
