<template>
  <Layout>
    <div class="container">
      <div class="hero">
        <h1 class="hero-title">{{ general.title }}</h1>
        <h2 class="hero-subtitle">
          {{ general.description }}
        </h2>
      </div>
      <div class="projects">
        <div class="project" v-for="image in images" :key="image.id">
          <g-link to="/" class="project-link"
            ><g-image
              :alt="image.name"
              :src="GRIDSOME_API_URL + image.image.url"
              width="2560"
              class="thumbnail g-image g-image--lazy g-image--loaded"
            />
            <h3 class="project-title">{{ image.name }}</h3>
            <div class="categories">
              <span class="category" v-for="cate in image.categeoy.split(',')" :key="cate"
                >{{ cate }}&nbsp;</span
              >
            </div>
          </g-link>
        </div>
      </div>
    </div>

    <div>
      <div class="latest-journals-heading container">
        <span class="label">Latest and greatest</span>
      </div>
      <div class="latest-journals">
        <div class="container">
          <g-link to="/" class="journal" v-for="edge in lastest" :key="edge.node.id">
            <h3 class="journal-title">{{ edge.node.subTitle }}</h3>
          </g-link>
        </div>
      </div>
    </div>
  </Layout>
</template>
<static-query>
query{
  general:allStrapiGeneral{
    edges{
        node{
        id
        title
        subtitle
        description
        owner
        }
      } 
    }
  lastest:allStrapiPost(sortBy:"created_at",order:DESC){
    edges{
      node{
        id
        title
       	subTitle
      }
    }
  }
  images:allStrapiImageList{
   	edges{
      node{
        name
        categeoy
       	image{
          url
        }
      }
    }
  }
}

</static-query>

<script>
export default {
  name: "Index",
  computed: {
    general() {
      return this.$static.general.edges[0].node;
    },
    lastest() {
      return this.$static.lastest.edges;
    },
    images() {
      return this.$static.images.edges.map((n) => n.node);
    },
  },
};
</script>

<style lang="css" scoped>
.hero-title {
  font-size: 3rem;
  font-weight: 700;
  padding: 0;
  margin: 0 0 2rem;
}
h1 {
  letter-spacing: -0.01em;
}
.hero-subtitle {
  font-size: 1.15em;
  font-weight: 400;
  line-height: 1.68;
  opacity: 0.6;
}
.hero-subtitle,
.hero-subtitle p,
.hero-title p {
  margin: 0;
  padding: 0;
}
.hero {
  text-align: center;
  width: 480px;
  max-width: 100%;
  margin: 0 auto;
  padding: 4rem 0 8rem;
}
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
}

.project {
  grid-column: auto/span 2;
  text-align: center;
}
.project:hover {
}
@media (min-width: 920px) {
  .project:nth-child(3n + 1) {
    grid-column: auto/span 2;
  }
}
@media (min-width: 920px) {
  .project {
    grid-column: auto/span 1;
  }
}

.project-title {
  font-size: 1rem;
  color: var(--color-contrast);
  margin: 2rem 0 1rem;
}
.project-link {
  text-decoration: none;
}
.categories {
  font-size: 0.8rem;
  color: var(--color-contrast-1);
}
.thumbnail {
  width: 2460px;
  height: 560px;
  -o-object-fit: cover;
  max-width: 100%;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgb(0 0 0 / 25%);
  transition: transform 0.25s ease;
}
.thumbnail:hover {
  transform: scale(1.1);
}
img {
  max-width: 100%;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.journal-title {
  font-size: 1rem;
  line-height: 1.35;
}
.latest-journals-heading {
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-size: 0.6rem;
  font-weight: 400;
  text-transform: uppercase;
}

.latest-journals {
  max-width: 100%;
  margin: 0 2rem;
  border: 1px solid var(--color-base-1);
}
.latest-journals > .container {
  display: flex;
  flex-wrap: wrap;
}

.journal {
  flex: 0 0 100%;
  display: block;
  padding: 2rem;
  transition: background 0.25s ease;
  text-decoration: none;
  border-bottom: 1px solid var(--color-base-1);
}
.journal:hover {
  background: var(--color-base-1);
}
@media (min-width: 580px) {
  .journal:first-child,
  .journal:nth-child(2) {
    border-bottom: 1px solid var(--color-base-1);
  }
}

@media (min-width: 580px) {
  .journal:first-child {
    border-right: 1px solid var(--color-base-1);
  }
}

@media (min-width: 580px) {
  .journal {
    flex: 0 0 50%;
  }
}
@media (min-width: 920px) {
  .latest-journals {
    margin: 0;
    border-left: 0;
    border-right: 0;
    border-top: 1px solid var(--color-base-1);
    border-bottom: 1px solid var(--color-base-1);
  }
}
@media (min-width: 920px) {
  .journal {
    flex: 0 0 25%;
  }
}
@media (min-width: 920px) {
  .journal:first-child,
  .journal:nth-child(2),
  .journal:nth-child(3) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }
}
</style>
