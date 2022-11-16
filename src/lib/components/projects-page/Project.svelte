<script lang="ts">

  export let project : any

</script>

<li class="project">
  <a 
  data-project-key={project.id}
  data-project-name={project.name}
  class="project_link"
  href={project.link}
  >
    {project.name}
  </a>
</li>

<style lang="scss">
  .project{
    width: 100%;
    padding: 2vw 0;
    display: flex;
    justify-content: center;
    position: absolute;
  }

  .project_link{
    font-size: clamp(28px,7vw,120px);
    font-weight: bold;
    user-select: none;
    font-family:  'Ubuntu';
    white-space: nowrap;
  }

  
</style>