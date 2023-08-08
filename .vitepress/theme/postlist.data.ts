// https://vitepress.dev/guide/data-loading#createcontentloader
import { createContentLoader } from 'vitepress'

/**
 * Loads all the markdown files with the `post` layout, in reverse-chronological order.
 */
export default createContentLoader('src/*.md', {
  transform(rawData) {
    const posts = rawData.filter(page => page.frontmatter.layout === 'post');
    // Take advantage of the fact that ISO-8601 dates can be sorted in lexicographical order (in English).
    posts.sort((a, b) => b.frontmatter.date.getTime() - a.frontmatter.date.getTime());
    return posts;
  }
})
