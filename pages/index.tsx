
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
}
export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview)
   return {
    props: { allPosts, preview },
    revalidate: 1,
  }
}
