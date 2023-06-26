
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import { getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Layout from '../components/layout'

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node
  const morePosts = edges.slice(1)

  return (
    
      <Layout preview={preview}>
      <Container>
       
      </Container>
    </Layout>
  )
}
