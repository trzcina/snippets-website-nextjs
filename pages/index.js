import Head from 'next/head'
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import * as FlotiqUserApi from "../lib/flotiq-sdk/src";

FlotiqUserApi
    .ApiClient.instance
    .authentications['HeaderApiKeyAuth']
    .apiKey = process.env.FLOTIQ_API_KEY;

export async function getStaticProps() {

    const projectsApi = new FlotiqUserApi.ContentProjectApi();
    const projects = await projectsApi.listProject({limit: 10});

    return {
        props: {
            projectsData: projects.data.map((project) => ({
                id: project.id,
                name: project.name
            }))
        }
    }
}

const demoJS = async () => {
    // Import Your Personal API SDK

    // Configure API
    FlotiqUserApi
        .ApiClient.instance
        .authentications['HeaderApiKeyAuth']
        .apiKey = process.env.FLOTIQ_API_KEY;

    // Request projects
    const ProjectsAPI = new FlotiqUserApi.ContentProjectApi();
    const projects = await ProjectsAPI.listProject({
        limit: 10
    });

    console.log(`Projects count: ${projects.total_count}`);
    projects.data.map((project) => {
        console.log(`${project.id}: ${project.name}`);
    });
}

export default function Home({projectsData}) {
    // run plain js demo
    // with result in console
    // demoJS();

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
                    {projectsData.map(({id, date, name}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/projects/${id}`}>
                                <a>{name}</a>
                            </Link>
                            <br/>
                            {id}
                            <br/>
                            {date}
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    )
}
