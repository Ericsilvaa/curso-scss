<template>
  <section class="contato">
    <h1 class="grid-4 titulo">Contato</h1>
    <div class="grid-7 offset-1">
        <form>
            <label for="">Nome</label>
            <input type="text">
            <div class="row">
                <div class="grid-7">
                    <label  for="">Nome</label>
                    <input type="text" >
                </div>
                <div class="grid-5">
                    <label  for="">Telelfone</label>
                    <input type="text">
                </div>
            </div>
            <label for="">Mensagem</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <input class="btn" type="submit" value="Enviar">
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
export default {

}
</script>

<style scoped>
.contato{
    display: flex;
}

</style>