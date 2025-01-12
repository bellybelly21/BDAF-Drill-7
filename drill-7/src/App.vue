<script>
import { RouterLink, RouterView } from "vue-router";
import { mapActions } from "pinia";
import { useCounterStore } from "./stores/counter";

export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(useCounterStore, ["establecerCursos", "establecerHome"]),
  },
  created() {
    let url = "http://localhost:3000/cursos";
    fetch(url)
      .then((respuestaCruda) => {
        respuestaCruda
          .json()
          .then((respuestaObjeto) => {
            console.log(respuestaObjeto);
            this.establecerCursos(respuestaObjeto);
          })
          .catch((errorObjeto) => {
            console.log("Error convirtiendo a json: ", errorObjeto);
          });
      })
      .catch((errorRespuestaCruda) => {
        console.log("Error consumiendo API: ", errorRespuestaCruda);
      });

    let urlHome = "http://localhost:3000/home";
    fetch(urlHome)
      .then((respuestaCrudaHome) => {
        respuestaCrudaHome
          .json()
          .then((respuestaObjetoHome) => {
            console.log(respuestaObjetoHome);
            this.establecerHome(respuestaObjetoHome);
          })
          .catch((errorObjetoHome) => {
            console.log("Error convirtiendo a json home: ", errorObjetoHome);
          });
      })
      .catch((errorRespuestaCrudaHome) => {
        console.log("Error consumiendo API Home: ", errorRespuestaCrudaHome);
      });
  },
};
</script>

<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="navbar-container">
        <RouterLink class="navbar-brand text-white" to="/">Cursos Alfaweb</RouterLink>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="/">Bienvenida</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="/home">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link text-white" to="/administracion">Administracion</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Contenido -->
    <main class="mt-5 pt-5">
  <section class="welcome-section">
  </section>
  <RouterView />
</main>
  </div>
</template>

<style scoped>

.navbar {
  background-color: hsla(160, 100%, 37%, 1);;
  z-index: 1030;
  width: 100%; 
  height: 95px;
  padding: 0; 
}

.navbar-brand{
  font-size: 24px;
  font-weight: bold;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 2em;
  width: 100%;
}

.nav-link,
.navbar-brand {
  color: white !important;
}

main {
  margin-top: 56px;
  padding: 1rem;
}


.navbar-nav {
  display: flex;
  flex-direction: row;
  list-style: none;
}

.navbar-toggler {
  border: none;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
