<template>
    <div class="Modal" >
        <b-modal v-model="isOpen" id="modal-scrollable" scrollable  size="xl" hide-footer hide-header-close no-close-on-backdrop style="width: 500px">
            <div v-for="(item, index) in data.content" :key="index">
                <p class="my-4 mx-4" style="font-size: 18px;">
                    {{ data.content[index] }}
                </p>
            </div>
            <ul class="mx-5" v-for="(item, index) in data.list" :key="index">
                <li style="font-size: 18px;">{{ data.list[index] }}</li>
            </ul><br>
            <img :src="data.image" class="mr-3 text-center" style="width: 100%">

            <template #modal-header="{}">
                <h3 class="ml-2"> {{data.title}}</h3>
                <b-button size="sm" variant="danger" @click="$emit('emit-close', isOpen)" style="width: 40px">
                    X
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => {},
    },
  }
}
</script>

<style scoped>
</style>
