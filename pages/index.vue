<template>
  <div>
    <div class="section section--hero">
      <o-image
        src="/hero_01.jpg"
        alt="A man walks in a field with a young boy"
      />
      <div class="hero__image--stacked">
        <o-image
          src="/hero_02.jpg"
          alt="Assorted fruit in a bowl"
        />
        <o-image
          src="/hero_03.jpg"
          alt="Asparagus in a row"
        />
      </div>
      <div class="hero__text">
        <h1 class="heading">{{ hero.title }}</h1>
        <p class="body">{{ hero.body }}</p>
        <span class="note note--heading">{{ hero.note['heading'] }}</span>
        <span class="note note--text"> {{ hero.note['text'] }}</span>
      </div>
    </div>
    <div class="section section--latest">
      <h1 class="section__heading">All the latest from AEG</h1>
      <div class="cards">
        <o-card v-for="(card, index) in latest" :title="card.title" :content="card.content" :image="card.image" :slug="card.slug" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const latest = await $content('articles').fetch()
    const hero = await $content('hero').fetch()
    return {
      latest,
      hero
    }
  }
}
</script>

<style lang="scss">
.section {
  @apply py-7;
  &--hero {
    @apply grid grid-rows-2 md:grid-cols-3 md:grid-rows-1 grid-cols-none gap-6;
    .hero__image {
      &--stacked {
        @apply grid md:grid-rows-2 md:grid-cols-none grid-rows-1 grid-cols-2 gap-6;
      }
    }
    .hero__text {
      @apply flex flex-col py-4 md:py-0;
      .heading {
        @apply text-2xl font-extralight text-white uppercase pb-3 border-b border-white;
      }
      .body {
        @apply text-grey font-thin text-sm md:text-base lg:text-lg my-4 md:my-8 leading-8;
      }
      .note {
        &--heading {
          @apply font-bold uppercase text-red text-base leading-10 mt-2 md:mt-0;
        }
        &--text {
          @apply font-bold text-lg text-white leading-8;
        }
      }
    }
  }
  &--latest {
    .cards {
      @apply grid md:grid-cols-2 lg:grid-cols-3 gap-6;
    }
  }
  &__heading {
    @apply text-3xl md:text-5xl text-white uppercase text-center font-thin my-8 md:my-12;
  }
}
</style>
