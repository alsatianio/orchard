<template>
  <div class="article">
    <o-button :route="{ name: 'index' }" :slug="'/'">
      Go back
    </o-button>
    <img :src="article.image" class="article__image" />
    <div class="article__info">
      <h1 class="heading">{{ article.title }}</h1>
      <span class="author">By: {{ article.author }}</span>
    </div>
    <div class="article__content">
      <p>{{ article.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ params, $content }) {
    const article = await $content('articles')
      .where({
        slug: params.slug
      })
      .fetch()
    return {
      article: article[0]
    }
  }
}
</script>

<style lang="scss" scoped>
  .article {
    &__image {
      @apply w-full h-96 object-cover mt-4;
    }
    &__info {
      @apply py-4;
      .heading {
        @apply text-3xl text-white font-bold my-1;
      }
      .author {
        @apply text-sm text-white;
      }
    }
    &__content {
      p {
        @apply text-white;
      }
    }
  }
</style>
