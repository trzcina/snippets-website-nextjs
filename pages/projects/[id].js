// File: pages/projects/[id].js
// Using auto generated SDK package

import * as FlotiqUserApi from '../../lib/flotiq-sdk/src/index';

FlotiqUserApi.ApiClient.instance.authentications['HeaderApiKeyAuth'].apiKey = process.env.FLOTIQ_API_KEY;

export async function getStaticPaths() {
    const projects = await (new FlotiqUserApi.ContentProjectApi().listProject({
        limit: 1000000
    }));
    return {
        paths: projects.data.map((project) => ({ params: { id: project.id } })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const project = await (new FlotiqUserApi.ContentProjectApi().getProject(params.id))
    return {
        props: {
            project: {
                name: project.name,
                description: project.description
            }
        }
    }
}

export default function Project({ project }) {
    return (
        <article>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </article>
    )
}
