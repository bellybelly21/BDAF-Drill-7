<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default{
    data(){
        return{
            titulo: ''
        }
    },
    computed:{
        ...mapState(useCounterStore , ['cantidadTotalAlumnos', 'cantidadTotalInscritos', 'cantidadTotalRestantes', 'cantidadTerminado','cantidadActivos','cantidadTotalCursos'])
    }
}
</script>
<template>
    <div id="divCantidades">
        <h1 v-html="titulo"></h1>
        <p class="cantidadTotalText">Cantidad Total de Alumnos Permitidos: {{ cantidadTotalAlumnos }} alumnos</p>
        <p class="cantidadInscritosText">Cantidad Total de Alumnos Inscritos: {{ cantidadTotalInscritos }} alumnos</p>
        <p class="cantidadRestantesText">Cantidad Total de Cupos Restantes: {{ cantidadTotalRestantes }} alumnos</p>
        <p class="cantidadTerminadoText">Cantidad Total de Cursos Terminados: {{ cantidadTerminado }} cursos</p>
        <p class="cantidadActivosText">Cantidad Total de Cursos Activos: {{ cantidadActivos }} cursos</p>
        <p class="cantidadCursosText">Cantidad Total de Cursos: {{ cantidadTotalCursos }} cursos</p>
    </div>
</template>
<style scoped>
.cantidadTotalText{
    color:blueviolet;
}
.cantidadInscritosText{
    color:blue;
}
.cantidadRestantesText{
    color:red;
}
.cantidadTerminadoText{
    color:chocolate;
}
.cantidadActivosText{
    color:brown;
}
.cantidadCursosText{
    color:white;
}
#divCantidades{
    color:black;
}

</style>