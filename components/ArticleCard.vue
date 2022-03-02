<template>
  <article class="article-card" :class="[size, language, icon]">
    <nuxt-link :to="`/blog/${articleInfo.link}`">
      <div class="card-inner">
        <p class="type">
          <font-awesome-icon :icon="['fab', icon]" />
          {{ capitalize(articleInfo.attributes.type) }}
        </p>
        <h4>{{ articleInfo.attributes.title }}</h4>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    articleInfo: {
      type: Object,
      default: () => {},
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    console.log(this.articleInfo.attributes.language)
    return {
      size: 'one-third',
      language: this.articleInfo.attributes.language,
      icon: 'js',
    }
  },
  mounted() {
    const articleNo = this.index + 1

    this.size = 'one-third'

    // If is first or multiple of 10
    if (articleNo === 1) this.size = 'two-thirds'
    if (articleNo % 10 === 0) this.size = 'two-thirds'

    // Switch for font awesome icon
    switch (this.language) {
      case 'vuejs':
        this.icon = 'vuejs'
        break
      case 'css3':
        this.icon = 'css3'
        break
      case 'react':
        this.icon = 'react'
        break
      case 'js':
        this.icon = 'js'
        break
      case 'wordpress':
        this.icon = 'wordpress'
        break
      case 'yarn':
        this.icon = 'yarn'
        break
      default:
        this.icon = 'nodeJs'
    }
  },
  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    },
  },
}
</script>

<style lang="scss">
.article-card {
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background-color: #7f471b;
  padding: 1rem;
  margin-bottom: 2rem;
  min-height: 240px;
  position: relative;
  overflow: hidden;

  a {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    color: #fff;
    box-shadow: none;
    background: rgba(0, 0, 0, 0);
    transition: 0.2s ease all;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }
    &:hover .type {
      color: white;
    }
    &:hover h4 {
      color: white;
    }
  }

  // Sizes
  &.two-thirds {
    width: calc(66% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }
  &.one-third {
    width: calc(33% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }
  &.three-thirds {
    width: calc(33% - 1rem);

    @media (max-width: 567px) {
      width: 100%;
    }
  }

  // Types
  &.learning {
    background-color: #28430a;
    color: White;
  }

  &.seo {
    background-color: #ef6555;
    color: White;
  }

  &.learning {
    background-color: #28430a;
    color: White;
  }

  &.Improvement {
    background-color: #edbd54;

    a {
      color: #252525;
    }
  }
  &.notion {
    background-color: #ff8c42;
    a {
      color: #252525;
    }
  }
  &.Productivity {
    background-color: #fee12b;

    a {
      color: #252525;
    }
  }
  &.Opinion {
    background-color: #264758;

    a {
      color: #252525;
    }
  }

  .card-inner {
    position: absolute;
    bottom: 1rem;
    left: 0;
    width: 100%;
    padding: 0 1rem;

    .type {
      background: rgba(0, 0, 0, 0.1);
      padding: 0.4rem;
      border-radius: 0.2rem;
      margin-bottom: 0.5rem;
      font-size: 0.8rem;
      display: inline-block;
      line-height: 0.8rem;
      color: black;
      &:hover {
        color: white;
      }
    }
    h4 {
      margin-top: 0;
      padding-bottom: 5.25rem;
      color: black;
      &:hover {
        color: white;
      }
    }
  }
}
</style>
