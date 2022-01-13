<template>
  <div class="controls">
    <Control v-for="list in all"
             :key="list.idList"
             :nameList="list.listName"
             :id="list.idList"
    />
    <button @click="addList"> Добавить list</button>
  </div>
  <div class="displays">
    <DisplayLists v-for="list in all"
                  :key="list.idList"
                  :nameList="list.listName"
                  :id="list.idList"
    />
  </div>
</template>

<script>
import Control from "./components/Control";
import DisplayLists from "./components/DisplayLists";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'App',
  components: {
    Control,
    DisplayLists
  },
  computed: {
    ...mapGetters({all: 'all'}),
  },
  methods: {
    ...mapActions({addList: 'addList'})
  }
}

</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: space-around
}

.controls {
  margin: 20px;
  width: 450px;
}

.displays {
  margin: 20px;
  width: 450px;
}
</style>
