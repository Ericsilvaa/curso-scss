<template>
    <section class="menu">
        <h1 class="grid-4 titulo">Menu</h1>
        <div class="grid-7 offset-1">
            <div>
                <div class="menu-item">
                    <img src="../assets/img/prato-1.png" alt="Prato 1">
                    <h2>Entradas</h2>
                    <ul>
                        <li><span>R$1,70</span> Ovos Mexidos</li>
                        <li><span>R$2,70</span> Scones de Frutas</li>
                        <li><span>R$4,70</span> Joelho de Queijo</li>
                        <li><span>R$3,70</span> Presunto Cozido</li>
                    </ul>
                </div>
                <div class="menu-item">
                    <img src="../assets/img/prato-2.png" alt="Prato 2">
                    <h2>Pratos Principais</h2>
                    <ul>
                        <li><span>R$10,70</span> Penne com Queijo</li>
                        <li><span>R$22,70</span> Feijoada</li>
                        <li><span>R33,70</span> Costela ao Molho</li>
                        <li><span>R$13,70</span> Medalhão de Frango</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  
</template>

<script>
export default {
    name: 'Menu',

}
</script>

<style scoped>
.menu{
    display: flex;
}

</style>