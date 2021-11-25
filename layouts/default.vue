<template>
  <div class="wrapper">
    <nuxt class="content" />
  </div>
</template>

<script>
export default {
  head: {
    title: "Orchard UI",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Orchard UI demo build",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>
<style lang="scss">
body {
  @apply dark:bg-grey-dark;
  .wrapper {
    @apply md:container mx-auto md:py-7 md:my-14 px-4;
    .content {
      @apply max-w-screen-xl mx-auto;
    }
  }
}
</style>
