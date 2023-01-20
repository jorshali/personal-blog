import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/Container'
import PostBody from '../../components/PostBody'
import PostHeader from '../../components/PostHeader'
import Layout from '../../components/Layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/PostTitle'
import Head from 'next/head'
import { SITE_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'
import type PostType from '../../interfaces/post'
import { Section } from '../../components/Section'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-8">
              <Head>
                <title>
                    {post.title + ' | ' + SITE_NAME}
                </title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <Section>
                <PostHeader
                  shareUrl={'https://jacoborshalick.me/posts/' + post.slug}
                  title={post.title}
                  subtitle={post.excerpt}
                  coverImage={post.coverImage}
                  coverImageAttribution={post.coverImageAttribution}
                  date={post.date}
                  author={post.author}
                />
                <PostBody content={post.content} />
              </Section>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'excerpt',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
    'coverImageAttribution'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
