<template>
  <div class="card">
    <img
      class="image"
      :src="image"
      :alt="content"
    />
    <div>
      <div class="py-6">
        <div class="card__title">
          {{ title }}
        </div>
        <p class="card__content">
          {{ content }}
        </p>
      </div>
      <o-button :route="{ name: 'article-slug', params: { slug } }" :slug="slug" >
        Read more
      </o-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      default: "/card_01.jpg",
      type: String,
      required: true
    },
    content: {
      default: "Lorem ipsum dolor sit amet",
      type: String,
      required: true
    },
    title: {
      default: "Card title",
      type: String,
      required: true
    },
    slug: {
      required: true,
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  @apply overflow-hidden dark:bg-grey-dark flex flex-col;
  &__title {
    @apply font-bold text-lg mb-2 leading-8 dark:text-white;
  }
  &__content {
    @apply text-grey dark:text-grey text-base leading-7 font-extralight;
  }
  .image {
    @apply w-full border-b-4 border-red;
  }
}
</style>
