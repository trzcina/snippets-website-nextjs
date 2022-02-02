// File: pages/projects/[id].js

import FlotiqApi from '../../lib/api';

export default function Project({ project }) {
    return (
        <article>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
        </article>
    )
}

export async function getStaticPaths() {
    return {
        paths: await FlotiqApi.getProjectsIds(),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            project: await FlotiqApi.getProject(params.id)
        }
    }
}
