import Container from '../components/Container'
import MoreStories from '../components/MoreStories'
import Intro from '../components/Intro'
import Layout from '../components/Layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import { Section } from '../components/Section'

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>
              Jacob Orshalick | Maximizing your value as a developer.
          </title>
        </Head>
        <Intro />

        <Section>
          <div id="About-Me" className="flex flex-wrap items-center">
            <div className="w-full sm:w-1/2 text-center sm:px-6">
              <h3 className="text-3xl text-gray-900 font-semibold">About Me</h3>
              <div className="mt-6 text-xl leading-9">
                I spent the last two decades independently consulting with Fortune 500 companies, startups, 
                and everything in between.  Along the way, I've authored over 100 software 
                articles and a book, spoke at major conferences, and won community awards for my
                contributions to open source.
              </div>
            </div>

            <div className="w-full sm:w-1/2 p-6">
              <img src="/assets/blog/authors/orshalick.jpg" className="rounded-full mr-4" alt="Jacob Orshalick" />
            </div>
          </div>
        </Section>

        <Container>
          <div id="Recent-Articles">
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
