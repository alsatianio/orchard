<template>
  <div>
    <o-modal :active="openModal" :src="src" @close="openModal = false">
      <img
        :src="src"
        :alt="alt"
      />
    </o-modal>
    <img
      @click.stop="openModal = !openModal"
      :src="src"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      openModal: false,
    }
  },
  props: {
    src: {
      default: "/hero_01.jpg",
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  @apply object-cover w-full h-full max-h-72 md:max-h-full;
}
</style>

