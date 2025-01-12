import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
    losCursos:[],
    elHome:{}
  }),
  actions:{
    establecerCursos(arregloCursos){
      this.losCursos = arregloCursos;
    },
    establecerHome(objetoHome){
      this.elHome = objetoHome;
    },
    insertarNuevoCurso(objetoCurso){
      this.losCursos.push(objetoCurso);
    },
    eliminarCurso(unIndice){
      this.losCursos.splice(unIndice,1);
    },
    editarCursoPinia(unIndice, unObjetoCurso){
      this.losCursos[unIndice] = unObjetoCurso;
    }
  },
  getters:{
    cantidadTotalAlumnos(){
      let cantidadAlumnos=0;
      for(let i=0; i< this.losCursos.length;i++){
        cantidadAlumnos = cantidadAlumnos + Number(this.losCursos[i].cupos);
      }
      return cantidadAlumnos;
    },
    cantidadTotalInscritos(){
      let cantidadInscritos=0;
      for(let i=0; i< this.losCursos.length;i++){
        cantidadInscritos = cantidadInscritos + Number(this.losCursos[i].inscritos);
      }
      return cantidadInscritos;
    },
    cantidadTotalRestantes(){
      let cantidadAlumnos=0;
      let cantidadInscritos=0;
      let cantidadRestantes =0;
      for(let i=0; i< this.losCursos.length;i++){
        cantidadAlumnos = cantidadAlumnos + Number(this.losCursos[i].cupos);
        cantidadInscritos = cantidadInscritos + Number(this.losCursos[i].inscritos);
      }
      cantidadRestantes = cantidadAlumnos - cantidadInscritos;
      return cantidadRestantes;

    },
    cantidadTerminado(){
      let cantidadTerminado=0;
      for(let i=0; i< this.losCursos.length;i++){
        if(this.losCursos[i].completado == true){
          cantidadTerminado = cantidadTerminado + 1;
        }
      }
      return cantidadTerminado;
    },
    cantidadActivos(){
      let cantidadActivos=0;
      for(let i=0; i< this.losCursos.length;i++){
        if(this.losCursos[i].completado == false){
          cantidadActivos = cantidadActivos + 1;
        }
      }
      return cantidadActivos;
    }, 
    cantidadTotalCursos(){
      return this.losCursos.length;
    }  

  }
})