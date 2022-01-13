<template>
  <div class="display-item">
    <div v-for="n in parseInt(count)"
         class="square"
         :style="{background: color}"
         @click="deleteItem({idList: idList, id: id })"
    ></div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "DisplayListItems",
  props: {
    name: String,
    color: String,
    count: String,
    idList: Number,
    active: Boolean,
    id: Number
  },
  methods: {
    ...mapActions({deleteItem: 'deleteItem'}),
  }
}
</script>

<style scoped>
.display-item {
  display: flex;
  flex-wrap: wrap

}

.square {
  width: 10px;
  height: 10px;
  margin: 3px;
}
</style>