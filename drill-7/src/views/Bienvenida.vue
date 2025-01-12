<script>
export default{
    data(){
        return{
            titulo: 'BIENVENIDA'
        }
    }
}
</script>
<template>
    <!-- Contenido -->
    <main class="mt-5 pt-5">
  <section class="welcome-section">
    <h1 class="welcome-title">¡Bienvenido a Cursos Alfaweb!</h1>
    <p class="welcome-description">
      Aprende, mejora y domina habilidades con nuestros cursos diseñados para ti.
    </p>
    <RouterLink class="btn btn-primary" to="/home">Explorar Cursos</RouterLink>
  </section>
  <RouterView />
</main>
</template>
<style scoped>
#divNotFound{
    background-color: yellow;
    color: blue;
}
</style>