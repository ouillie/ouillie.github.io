<script setup lang="ts">
import { useData } from 'vitepress'

import { data as postlist } from './postlist.data.ts'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, theme, page } = useData()
</script>

<template>
  <header>
    <div class="header-content">
      <a href="/" class="header-title">{{ site.title }}</a>
      <h1 class="header-tagline">{{ site.description }}</h1>
      <ul>
        <li v-for="post in postlist">
          <a :href="post.url">{{ post.frontmatter.title }}</a>
        </li>
      </ul>
      <div class="copyright">© 2023 Will Noble</div>
    </div>
  </header>
  <div class="main-content">
    <!-- Vitepress' built-in `Content` component is where rendered Markdown goes: -->
    <Content />
  </div>
</template>
