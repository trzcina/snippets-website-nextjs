import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import FlotiqApi from "../lib/api";

export async function getStaticProps() {
    return {
        props: {
            projectsData: (await FlotiqApi.getProjects(10)).data
        }
    }
}


export default function Home({ projectsData }) {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Lorem ipsum dolor sit amet</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>Blog</h2>
              <ul className={utilStyles.list}>
                  {projectsData.map(({ id, date, name }) => (
                      <li className={utilStyles.listItem} key={id}>
                          <Link href={`/projects/${id}`}>
                              <a>{name}</a>
                          </Link>
                          <br />
                          {id}
                          <br />
                          {date}
                      </li>
                  ))}
              </ul>
          </section>

      </Layout>
  )
}
