export const projectService = {
    getProjects,
    getProjectByName
}

const projects = [
    {
        _id: 'a101',
        name: 'agenda',
        repo: 'https://github.com/TalBenAtiya/agenda-frontend',
        website: 'https://agenda-platform.herokuapp.com/',
        text: 'Task management platform where anyone can create the tools they need to run every aspect of their work.',
    },
    {
        _id: 'a102',
        name: 'rapidgames',
        repo: 'https://github.com/TalBenAtiya/rapid-games-frontend',
        website: 'http://rapidgames.onrender.com/',
        text: 'Web game store apllication. You can search and view games info and even manage your own cart.'
    },
    {
        _id: 'a103',
        name: 'memegen',
        repo: 'https://github.com/TalBenAtiya/Meme-Generator',
        website: 'https://talbenatiya.github.io/Meme-Generator/',
        text: 'Memes generator with available ready meme photos, made with canvas'
    },
    {
        _id: 'a104',
        name: 'appsus',
        repo: 'https://github.com/TalBenAtiya/Appsus-Sprint-3',
        website: 'https://talbenatiya.github.io/Appsus-Sprint-3/',
        text: 'Using the app you can save different kind of notes and manage you\'r mail. Google Notes and Gmail like project'
    },
    {
        _id: 'a105',
        name: 'mrtoy',
        repo: 'https://github.com/TalBenAtiya/mr-toy',
        website: 'https://mrtoy22.herokuapp.com/#/toys',
        text: 'Toy web store with dashboard and store map locations, filter toys as you wish and add them to your cart'
    }
]

function getProjects() {
    return projects
}

function getProjectByName(str) {
    return projects.find(project => project.name === str)
}