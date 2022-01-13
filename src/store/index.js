import {createStore} from 'vuex'

const getList = (lists, id) => lists.find(item => item.idList === id);
export default createStore({
    state: {
        lists: [
            {
                idList: 1,
                listName: 'List-1',
                items: [
                    {
                        id: 3,
                        name: 'item',
                        color: 'black',
                        count: 10,
                        active: true
                    }, {
                        id: 4,
                        name: 'item2',
                        color: 'black',
                        count: 1,
                        active: true
                    }

                ]
            },
            {
                idList: 2,
                listName: 'List2',
                items: [
                    {
                        id: 5,
                        name: 'item3',
                        color: 'black',
                        count: 1,
                        active: true
                    }
                ]
            }
        ]
    },
    getters: {

        all: state => state.lists,

        itemsList: state => id => state.lists.filter(item => item.idList === id)[0].items,
    },
    mutations: {

        addItem(state, {idList, item}) {
            let list = state.lists.filter(item => item.idList === idList)[0].items;
            list.push(item)
        },

        addList(state, list) {
            state.lists.push(list)
        },

        editListName(state, {idList, newListName}) {
            let list = state.lists.find(item => item.idList === idList);
            list.listName = newListName
        },

        editShowItem(state, {idList, id}) {
            let list = getList(state.lists, idList);
            let item = list.items.find(item => item.id === id);
            item.active = !item.active;
        },

        editCount(state, {idList, id, newCount}) {
            let list = state.lists.find(item => item.idList === idList);
            let item = list.items.find(item => item.id === id);
            item.count = newCount;
        },

        editColor(state, {idList, id, newColor}) {
            let list = state.lists.find(item => item.idList === idList);
            let item = list.items.find(item => item.id === id);
            item.color = newColor;
        },

        deleteItem(state, {idList, id}) {
            let list = state.lists.find(item => item.idList === idList);
            let item = list.items.find(item => item.id === id);
            item.count--
        },

        editShowAllItem(state, {idList, value}) {
            let list = state.lists.find(item => item.idList === idList);
            list.items.forEach(item => item.active = value);
        },

    },
    actions: {

        addItem({commit}, idList) {
            let item = {
                id: parseInt(Math.random() * 10000),
                name: 'item',
                color: 'black',
                count: 1,
                active: true
            }
            commit('addItem', {idList, item})
        },

        addList({commit}) {
            let list = {
                idList: parseInt(Math.random() * 10000),
                listName: 'List-',
                items: [
                    {
                        id: parseInt(Math.random() * 10000),
                        name: 'item',
                        color: 'black',
                        count: 1,
                        active: true
                    }
                ]
            }
            commit('addList', list)
        },

        editListName({commit}, payload) {
            commit('editListName', payload)
        },

        editShowItem({commit}, payload) {
            commit('editShowItem', payload)
        },

        editCount({commit}, payload) {
            if (payload.newCount < 0) {
                payload.newCount = 0;
            }
            commit('editCount', payload)
        },

        editColor({commit}, payload) {
            commit('editColor', payload)
        },

        deleteItem({commit}, payload) {
            commit('deleteItem', payload)
        },
        editShowAllItem({commit}, payload) {
            commit('editShowAllItem', payload)
        },

    },
    modules: {}
})
