<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import Cantidades from '@/components/Cantidades.vue';

export default{
    components:{
        Cantidades
    },
    data(){
        return{
            titulo: 'Administracion',
            nuevoCurso: {
                id: 0,
                img: "",
                nombre: "",
                costo: "",
                duracion: "",
                cupos: "",
                inscritos: "",
                completado: "",
                fecha_registro: "",
                descripcion: ""
            },
            indiceEditar:0,
            editarCurso: {
                id: 0,
                img: "",
                nombre: "",
                costo: "",
                duracion: "",
                cupos: "",
                inscritos: "",
                completado: "",
                fecha_registro: "",
                descripcion: ""
            },           
        }
    },
    methods:{
        ...mapActions( useCounterStore, ['insertarNuevoCurso', 'eliminarCurso', 'editarCursoPinia']),
        limpiar(){
            this.nuevoCurso.id=0;
            this.nuevoCurso.img= "";
            this.nuevoCurso.nombre= "";
            this.nuevoCurso.costo= "";
            this.nuevoCurso.duracion= "";
            this.nuevoCurso.cupos= "";
            this.nuevoCurso.inscritos= "";
            this.nuevoCurso.completado= "";
            this.nuevoCurso.fecha_registro= "";
            this.nuevoCurso.descripcion= "";  
        },
        limpiarEditar(){
            this.editarCurso.id=0;
            this.editarCurso.img= "";
            this.editarCurso.nombre= "";
            this.editarCurso.costo= "";
            this.editarCurso.duracion= "";
            this.editarCurso.cupos= "";
            this.editarCurso.inscritos= "";
            this.editarCurso.completado= "";
            this.editarCurso.fecha_registro= "";
            this.editarCurso.descripcion= "";  
        },
        insertarCurso(){
            let elCurso = {
                id: Math.floor(Math.random()*100),
                img: this.nuevoCurso.img,
                nombre: this.nuevoCurso.nombre,
                costo: Number(this.nuevoCurso.costo),
                duracion: this.nuevoCurso.duracion,
                cupos: Number(this.nuevoCurso.cupos),
                inscritos: Number(this.nuevoCurso.inscritos),
                completado: Boolean(this.nuevoCurso.completado),
                fecha_registro: this.nuevoCurso.fecha_registro,
                descripcion: this.nuevoCurso.descripcion
            };
            this.insertarNuevoCurso(elCurso);
            this.limpiar();
            var myModalEl = document.getElementById('exampleModal');
            var modal = bootstrap.Modal.getInstance(myModalEl); 
            modal.hide();       
        },
        eliminar(elIndice){
            console.log(elIndice);
            let confirmar = confirm('Desea eliminar el registro '+ elIndice);
            if(confirmar == true){
                alert('SE ELIMINARÁ EL REGISTRO '+ elIndice);
                this.eliminarCurso(elIndice);
            }
            else{
                alert('No se eliminara el registro'+ elIndice);
            }
        },
        editar(elIndice){
            console.log(elIndice);
            this.indiceEditar = elIndice;
            let cursoSeleccionado = this.losCursos[elIndice];
            console.log(cursoSeleccionado);
            this.editarCurso.id = cursoSeleccionado.id;
            this.editarCurso.img= cursoSeleccionado.img;
            this.editarCurso.nombre= cursoSeleccionado.nombre;
            this.editarCurso.costo= cursoSeleccionado.costo;
            this.editarCurso.duracion= cursoSeleccionado.duracion;
            this.editarCurso.cupos= cursoSeleccionado.cupos;
            this.editarCurso.inscritos=cursoSeleccionado.inscritos;
            this.editarCurso.completado=cursoSeleccionado.completado;
            this.editarCurso.fecha_registro= cursoSeleccionado.fecha_registro;
            this.editarCurso.descripcion=cursoSeleccionado.descripcion;
        },
        invocarEditar(){
            let elIndice = this.indiceEditar;
            let elCurso = {
                id: this.editarCurso.id,
                img: this.editarCurso.img,
                nombre: this.editarCurso.nombre,
                costo: Number(this.editarCurso.costo),
                duracion: this.editarCurso.duracion,
                cupos: Number(this.editarCurso.cupos),
                inscritos: Number(this.editarCurso.inscritos),
                completado: Boolean(this.editarCurso.completado),
                fecha_registro: this.editarCurso.fecha_registro,
                descripcion: this.editarCurso.descripcion
            };     
            this.editarCursoPinia(elIndice, elCurso);
            this.limpiarEditar();
            var myModalEd = document.getElementById('editModal');
            var modal = bootstrap.Modal.getInstance(myModalEd); 
            modal.hide();  
        }
    },
    computed:{
        ...mapState(useCounterStore, ['losCursos']),
    }
}
</script>

<template>
    <div id="divAdministracion" class="text-center">
        <h1 v-html="titulo"></h1>

        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Agregar Curso</button>
        <p>{{ nuevoCurso.nombre }}</p>
        <p>{{ nuevoCurso.fecha_registro }}</p>

        <table class="table table-dark table-hover ">
            <thead>
                <tr>
                    <th scope="col">Curso</th>
                    <th scope="col">Cupos</th>
                    <th scope="col">Inscritos</th>
                    <th scope="col">Duración</th>
                    <th scope="col">Costo</th>
                    <th scope="col">Terminado</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(curso, index) in losCursos ">
                    <th scope="row">{{ index }} - {{ curso.id }}</th>
                    <td>{{ curso.cupos }}</td>
                    <td>{{ curso.inscritos }}</td>
                    <td v-html="curso.duracion"></td>
                    <td>{{ curso.costo }}</td>
                    <td>
                        <p v-if="curso.completado" class="cursoTerminado"> SI</p>
                        <p v-else>NO</p>
                    </td>
                    <td>{{ curso.fecha_registro }}</td>
                    <td><p> <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#editModal"  v-on:click="editar(index)">Editar</button>
                            <button class="btn btn-danger" v-on:click="eliminar(index)">Eliminar</button> 
                    </p></td>
                </tr>
            </tbody>
        </table>

        <div id="elDivCantidades">
           
        </div>

    </div>
    <Cantidades></Cantidades>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">AGREGAR CURSO</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputText1" placeholder="Nombre" v-model="nuevoCurso.nombre">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputText2" placeholder="URL de la imagen" v-model="nuevoCurso.img">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputText3" placeholder="Cupos del Curso" v-model="nuevoCurso.cupos">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputText4" placeholder="Inscritos en el Curso"  v-model="nuevoCurso.inscritos">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputText5" placeholder="Duración del Curso"  v-model="nuevoCurso.duracion">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputText6" class="form-label">Fecha del Curso</label>
                        <input type="date" class="form-control" id="exampleInputText6"  v-model="nuevoCurso.fecha_registro">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="exampleInputText7" placeholder="Costo del Curso" v-model="nuevoCurso.costo">
                    </div>
                    <div class="mb-3">
                        <textarea id="exampleInputText8" rows="4" cols="50" placeholder="Descripción del Curso" v-model="nuevoCurso.descripcion"></textarea>
                    </div>
                </form>
      </div>
      <div class="modal-footer">
        <div class="text-start">
                <button type="button" class="btn btn-success" v-on:click="insertarCurso">Agregar</button>
                <button type="button" class="btn btn-warning" v-on:click="limpiar">Limpiar Formulario</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
        </div>  
      </div>
    </div>
  </div>
</div>

<!-- Modal 2 -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editModalLabel">EDITAR CURSO</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="editInputText1" placeholder="Nombre" v-model="editarCurso.nombre">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="editInputText2" placeholder="URL de la imagen" v-model="editarCurso.img">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="editInputText3" placeholder="Cupos del Curso" v-model="editarCurso.cupos">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="editInputText4" placeholder="Inscritos en el Curso"  v-model="editarCurso.inscritos">
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="editInputText5" placeholder="Duración del Curso"  v-model="editarCurso.duracion">
                    </div>
                    <div class="mb-3">
                        <label for="editInputText6" class="form-label">Fecha del Curso</label>
                        <input type="date" class="form-control" id="editInputText6"  v-model="editarCurso.fecha_registro">
                    </div>
                    <div class="mb-3">
                            <label for="editInputText9" class="form-label">Terminado</label>
                            <input type="text" class="form-control" id="editInputText9" placeholder="Terminado" v-model="editarCurso.completado">
                            </div>

                    <div class="mb-3">
                        <input type="text" class="form-control" id="editInputText7" placeholder="Costo del Curso" v-model="editarCurso.costo">
                    </div>
                    <div class="mb-3">
                        <textarea id="editInputText8" rows="4" cols="50" placeholder="Descripción del Curso" v-model="editarCurso.descripcion"></textarea>
                    </div>
                </form>
      </div>
      <div class="modal-footer">
        <div class="text-start">
                <button type="button" class="btn btn-success" v-on:click="invocarEditar">Editar</button>
                <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
        </div>  
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.cursoTerminado{
    color:white;
    background-color: aqua;
}
#divAdministracion{
    background-color:aquamarine;
    color: black;
}
#elDivCantidades{
    margin: 2%;
    background-color: aqua;
}
</style>
