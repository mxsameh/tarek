const getProjectsListsNumber = (projectsWraperHeight : number) =>
{
  let projectsListsNumber =  window.innerHeight / projectsWraperHeight
  projectsListsNumber = Math.ceil(projectsListsNumber)

  return projectsListsNumber
}

export default getProjectsListsNumber
