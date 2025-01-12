<script>
import cursosData from "@/assets/bd_cursos/cursos.json";

export default {
  data() {
    return {
      cursos: [],
    };
  },
  created() {

    this.cursos = cursosData.home;
  },
};
</script>

<template>
  <div class="home-container">
    <!-- Título principal -->
    <h1 class="title">Lista de Cursos</h1>

    <!-- Contenedor de las tarjetas -->
    <div class="cards-container">
      <div
        v-for="(curso, index) in cursos.titulos"
        :key="index"
        class="card"
      >
        <img :src="cursos.imagenes[index]" :alt="curso" class="card-image" />
        <h3 class="card-title">{{ curso }}</h3>
        <p class="card-description">
          {{ cursos.descripcion[index].descripcion }}
        </p>
        <ul class="card-details">
          <li><strong>Costo:</strong> ${{ cursos.descripcion[index].costo }}</li>
          <li><strong>Duración:</strong> {{ cursos.descripcion[index].duracion }}</li>
          <li><strong>Cupos:</strong> {{ cursos.descripcion[index].cupos }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos generales */
.home-container {
  text-align: center;
  padding: 2rem;
}

/* Estilo del título */
.title {
  font-size: 2.5rem;
  color: green;
  margin-bottom: 2rem;
  font-weight: bold;
}

/* Contenedor de las tarjetas */
.cards-container {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

/* Estilo de las tarjetas */
.card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 300px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-align: left;
}

/* Efecto al pasar el mouse */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Imagen de la tarjeta */
.card-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin-bottom: 1rem;
}

/* Título del curso */
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

/* Descripción del curso */
.card-description {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

/* Detalles del curso */
.card-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card-details li {
  font-size: 0.85rem;
  color: #555;
}
</style>
