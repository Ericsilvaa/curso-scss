import Vue from "vue";
import Vuex from "vuex"
import {api} from "@/services"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        contato: {
            id: "",
            nome: "",
            email: "",
            telefone: "",
            cep: "",
            cidade: "",
            mensagem: "",
        },
        entradas: [],
        principais:[]

    },
    mutations: {
        // UPDATE_CONTATO(state, payload) {
        //     state.contato = payload
        // }
        UPDATE_ENTRADAS(state, payload) {
            state.entradas = payload
        },
        UPDATE_PRINCIPAIS(state, payload){
            state.principais = payload
        }
    },
    actions: {
        // criarContato(context, payload){
        //     context.commit('UPDATE_USUARIO', {id: payload.email})
        //         api.post('/contato', payload)
        // }
    }

    })