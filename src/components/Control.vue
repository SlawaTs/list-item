<template>
  <div class="list-items-content">
    <div class="list-items-header">
      <div @click="showItems=!showItems" class="list-items-show">
        <i class="list-items__arrow down" v-if="showItems"></i>
        <i class="list-items__arrow right" v-else></i>
      </div>
      <div class="list-items-checkbox">
        <img src="../assets/checkbox-true.png"
             class="list-items-checkbox__icon"
             v-if="valueCheckbox===1"
             @click="editShowAllItem( {idList: id, value: false})"
        />
        <img src="../assets/checkbox-false.png"
             class="list-items-checkbox__icon"
             v-if="valueCheckbox===2"
             @click="editShowAllItem( {idList: id, value: true})"
        />
        <img src="../assets/checkbox-.png"
             class="list-items-checkbox__icon"
             v-if="valueCheckbox===3"
             @click="editShowAllItem( {idList: id, value: true})"
        />
      </div>
      <input
          name="nameListItem"
          :value="nameList"
          @input="editName"
      >
    </div>
    <ControlListItems v-for="item in itemsList(id)"
                      :key="item.name"
                      :name="item.name"
                      :color="item.color"
                      :count="item.count"
                      :idList="id"
                      :active="item.active"
                      :id="item.id"
                      class="list-items-control"
                      v-show="showItems"
    />
    <button class="list-items__btm" @click="addItem(id)">Добавить item</button>
  </div>
</template>

<script>
import ControlListItems from "./ControlListItems";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "Control",
  data() {
    return {
      showItems: false,
    }
  },
  props: {
    nameList: String,
    id: Number,
  },
  components: {
    ControlListItems
  },
  computed: {
    ...mapGetters({itemsList: 'itemsList'}),
    valueCheckbox() {
      let items = this.itemsList(this.id)
      let activeItem = items.filter(item => item.active === true);
      if (activeItem.length === items.length) {
        return 1
      } else if (activeItem.length === 0) {
        return 2
      } else return 3

    }
  },
  methods: {
    ...mapActions({addItem: 'addItem', editListName: 'editListName', editShowAllItem: 'editShowAllItem'}),
    editName(e) {
      this.editListName({idList: this.id, newListName: e.target.value})
    }
  }
}
</script>

<style>
.list-items-content {

}

.list-items-header {
  display: flex;
  align-items: center;
  margin: 10px;
}

.list-items-checkbox {
  margin: 0px 10px;
}

.list-items-checkbox__icon {
  width: 16px;
}

.list-items__arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}

.list-items-control {
  margin-left: 50px;
}

.list-items__btm {
  margin: 10px;
}
</style>