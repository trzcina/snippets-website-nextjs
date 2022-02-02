const FLOTIQ_URL = 'https://api.flotiq.com/api/v1/';
const FETCH_CONFIG = {
    headers: {
        'X-AUTH-TOKEN': process.env.FLOTIQ_API_KEY
    }
}

const getProjects = async (limit= 100000) => {
    return  await fetch(`${FLOTIQ_URL}content/project?limit=${limit}`, FETCH_CONFIG)
        .then((res) => res.json());
}

const getProjectsIds = async (limit) => {
    return getProjects(limit).then((project) => (
        { params: { id: project.id } }
    ))
}

const getProject = async (id) => {
    return  await fetch(`${FLOTIQ_URL}content/project/${id}`, FETCH_CONFIG)
        .then((res) => res.json());
}

export default {
    getProjects,
    getProjectsIds,
    getProject
}

