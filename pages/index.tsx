
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/container'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts: { edges }, preview }) {
}
export const getStaticProps: GetStaticProps = async ({ preview = true }) => {
  
   return {
    revalidate: 1,
  }
}
