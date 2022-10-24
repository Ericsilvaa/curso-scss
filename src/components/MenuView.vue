<template>
    <section class="menu">
        <h1 class="grid-4 titulo">Menu</h1>
        <div class="grid-7 offset-1">
            <!-- Realizar um Crud -->
           
            <MenuEntradas :entrada='entradas'  />
            <MenuPrincipais :principais="principais"/>
        </div>
    </section>
  
</template>

<script>
import MenuEntradas from '@/components/MenuEntradas.vue'
import MenuPrincipais from '@/components/MenuPrincipais.vue'
import { api } from '@/services'


export default {
    name: 'Menu',
    components: {MenuEntradas, MenuPrincipais},
    data() {
        return {
            entradas: [
                // {name: 'Ovos Mexidos', value: '1,70'},
                // {name: 'Scones de Frutas', value: '2,70'},

            ],
            principais: [
                // {name: 'Ovos Mexidos', value: '1,70'},
                // {name: 'Scones de Frutas', value: '2,70'},
                
            ]
        }
    },
    methods: {
        async getCardapio() {
            try {
                const buscarEntradas = await api.get('/entradas')
                const buscarPrincipais = await api.get('/principais')

                this.entradas = buscarEntradas.data
                this.principais = buscarPrincipais.data
            } catch (error) {
                console.log(error)
            }
        }
    },
    created() {
        this.getCardapio()
    }

}
</script>

<style scoped>
.menu{
    display: flex;
}

</style>