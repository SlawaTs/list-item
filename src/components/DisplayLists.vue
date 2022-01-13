<template>
  <div class="display-list">
    <div>{{ nameList }}</div>
    <DisplayListItems v-for="item in itemsList(id)"
                      v-show="item.active"
                      :key="item.id"
                      :name="item.name"
                      :color="item.color"
                      :count="item.count"
                      :idList="id"
                      :active="item.active"
                      :id="item.id"
    />
  </div>
</template>

<script>
import DisplayListItems from "./DisplayListItems";
import {mapGetters} from "vuex";

export default {
  name: "DisplayLists",
  props: {
    nameList: String,
    id: Number
  },
  components: {
    DisplayListItems
  },
  computed: {
    ...mapGetters({itemsList: 'itemsList'}),
  },
}
</script>

<style scoped>
.display-list {
  margin: 15px 0px;
}
</style>