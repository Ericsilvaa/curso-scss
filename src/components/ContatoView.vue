<template>
  <section class="contato">
    <h1 class="grid-4 titulo">Contato</h1>
    <div class="grid-7 offset-1">
        <form>
            <label for="">Nome</label>
            <input type="text" >
            <div class="row">
                <div class="grid-7">
                    <label  for="">E-mail</label>
                    <input type="text" >
                </div>
                <div class="grid-5">
                    <label  for="">Telelfone</label>
                    <input type="text" >
                </div>
            </div>
            <div class="row">
                <div class="grid-7">
                    <label  for="">Cep</label>
                    <input type="text" >
                </div>
                <div class="grid-5">
                    <label  for="">Cidade</label>
                    <input type="text" >
                </div>
            </div>
            
            <label for="">Mensagem</label>
            <textarea name="mensagem"></textarea>
            <input class="btn" type="submit"  value="Enviar">
        </form>
        <div class="contato-info">
            <p>contato@lescone.com ////</p>
            <p>+55 048 2412-3555 ////</p>
        </div>
        <a href="#" class="contato-mapa">
            <img src="../assets/img/map.png" alt="Como Chegar Le Scone">
        </a>
    </div>
  </section>
</template>

<script>
import { mapFields } from '@/helpers'
import {getCep} from '@/services'


export default {
    // computed: {
    // ...mapFields({
    //   fields: ["id","nome","email","telefone","cep","cidade","mensagem"],
    //   base: "contato",
    //   mutation: "UPDATE_CONTATO"
    //  }),
    // // //  mostrarDados() {
    // // //     return this.$route.name === 'contato'
    // // //  }
    // },
    // methods: {
    //     preencherCep() {
    //         const cep = this.cep.replace(/\D/g, "");
    //         if(cep.length === 8) {
    //           getCep(cep).then(r => {
    //             this.cidade = r.data.localidade
    //           })
              
    //         }
    //     }
    // }
}
</script>

<style scoped>
.contato{
    display: flex;
}

</style>