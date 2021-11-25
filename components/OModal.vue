<template>
  <transition name="fade">
    <div
      v-if="active"
      class="fixed inset-0 w-full h-screen flex items-center justify-center bg-grey-dark bg-opacity-80 z-100"
      @click.self="close"
    >
      <div
        class="relative max-h-screen w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 flex"
      >
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-xl text-2xl text-gray-500 my-2 mx-4"
          @click.prevent="close"
        >
          ×
        </button>
        <div class="overflow-auto max-h-screen w-full m-4">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    active: {
      required: true,
      default: false,
      type: Boolean
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  },
  mounted () {
    if (this.active) {
      document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
          this.close();
        }
      });
    }
  },
  watch: {
    active(value) {
      if (value) {
        return document.querySelector("body").classList.add("overflow-hidden");
      }
      return document.querySelector("body").classList.remove("overflow-hidden");
    }
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
