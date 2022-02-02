// File: pages/projects/[id].js

export async function getStaticPaths() {
    const projects = await fetch('https://api.flotiq.com/api/v1/content/project?limit=100000', {
        headers: {
            'X-AUTH-TOKEN': process.env.FLOTIQ_API_KEY
        }
    }).then((result) => result.json());

    return {
        paths: projects.data.map((project) => ({ params: { id: project.id } })),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const project = await fetch(`https://api.flotiq.com/api/v1/content/project/${params.id}`, {
        headers: {
            'X-AUTH-TOKEN': process.env.FLOTIQ_API_KEY
        }
    }).then((result) => result.json());
    return {
        props: { project: project }
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
