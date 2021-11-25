<template>
  <nuxt-link :to="route">
    <button class="btn" @click="logClick(slug, $event)">
      <span class="btn__text"><slot>Button</slot></span>
    </button>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    route: {
      type: Object,
      required: true,
    },
    slug: {
      type: String,
      required: false
    }
  },
  methods: {
    logClick(slug, event) {
      console.log(`Navigating to: ${slug}`, event)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  @apply uppercase py-2 px-1 relative;
  &__text {
    @apply z-10 relative;
  }
  &.btn {
    @apply bg-transparent text-white border-b border-red;
    &:hover {
      &::after {
        @apply h-full;
      }
    }
    &::after {
      @apply h-0 bg-red w-full block absolute bottom-0 left-0 transition-all z-auto;
      content: '';
    }
  }
}
</style>
