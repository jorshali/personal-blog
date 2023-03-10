import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import YouTube from "react-youtube";

import Container from "../../components/Container";
import Layout from "../../components/Layout";
import PostBody from "../../components/PostBody";
import PostHeader from "../../components/PostHeader";
import PostTitle from "../../components/PostTitle";
import { Section } from "../../components/Section";
import SectionSeparator from "../../components/SectionSeparator";
import { SubscribeForm } from "../../components/SubscribeForm";
import type PostType from "../../interfaces/post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { HERO_SUBTITLE, SITE_NAME, SITE_URL } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post }: Props) {
  const router = useRouter();

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout excludeOgImage={true}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-8">
              <Head>
                <title>{post.title + " | " + SITE_NAME}</title>
                <meta property="og:image" content={post.ogImage.url} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.excerpt} />
              </Head>
              <Section>
                <PostHeader
                  shareUrl={SITE_URL + "/posts/" + post.slug}
                  title={post.title}
                  subtitle={post.excerpt}
                  coverImage={post.coverImage}
                  coverImageAttribution={post.coverImageAttribution}
                  date={post.date}
                />
                <PostBody content={post.content} />

                {post.youTubeVideoId ? (
                  <YouTube
                    opts={{ width: "100%" }}
                    style={{ textAlign: "center" }}
                    videoId={post.youTubeVideoId}
                  />
                ) : null}

                <SectionSeparator />

                <div className="mt-8 mb-8 text-lg">
                  Want to know more? Subscribe! {HERO_SUBTITLE}
                </div>
                <SubscribeForm />
              </Section>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
    "coverImageAttribution",
    "youTubeVideoId",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
