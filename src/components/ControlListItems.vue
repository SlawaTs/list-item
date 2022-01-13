<template>
  <div class="control-form">
    <input type="checkbox"
           class="control-form__input"
           :checked="active"
           @click="editShowItem({idList: idList, id: id })"
    >
    <div class="control-form__name">{{ name }}</div>

    <input type="number"
           min="0"
           class="control-form__input"
           :value="count"
           @input="editItemCount"
    >
    <input type="color"
           class="control-form__input"
           :value="color"
           @input="editItemColor"
    >
  </div>

</template>

<script>

import {mapActions} from "vuex";

export default {
  name: "ControlListItems",
  props: {
    name: String,
    color: String,
    count: Number,
    idList: Number,
    active: Boolean,
    id: Number
  },

  computed: {

  },

  methods: {

    ...mapActions({editShowItem: 'editShowItem', editCount: 'editCount', editColor: 'editColor'}),

    editItemCount(e) {
      this.editCount({idList: this.idList, id: this.id, newCount: e.target.value})
    },

    editItemColor(e) {
      this.editColor({idList: this.idList, id: this.id, newColor: e.target.value})
    }
  }
}

</script>

<style scoped>
.control-form {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
}

.control-form__input {
  margin-left: 5px;
}

.control-form__name {
  margin-left: 10px;
  min-width: 100px;
}
</style>