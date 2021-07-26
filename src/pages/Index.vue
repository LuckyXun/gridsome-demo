<template>
  <Layout>

    <div>
      <div class="latest-journals-heading container"><span class="label">Latest and greatest</span></div>
      <div class="latest-journals">
        <div class="container">
          <g-link
            to="/journal/gridsome-forestry-cms/"
            class="journal"
          >
            <h3 class="journal-title">Gridsome with Forestry CMS</h3>
          </g-link>
          <g-link
            to="/journal/use-gridsome-vuejs/"
            class="journal"
          >
            <h3 class="journal-title">VueJS for your next project</h3>
          </g-link>
          <g-link
            to="/journal/macos-development-environment/"
            class="journal"
          >
            <h3 class="journal-title">macOS development environment</h3>
          </g-link>
          <g-link
            to="/journal/a-journal-entry/"
            class="journal"
          >
            <h3 class="journal-title">About Typography</h3>
          </g-link>
        </div>
      </div>
    </div>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style lang="css">
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
@media (min-width: 920px) {
  .journal:first-child,
  .journal:nth-child(2),
  .journal:nth-child(3) {
    border: 0;
    border-right: 1px solid var(--color-base-1);
  }
}
@media (min-width: 580px) {
  .journal:first-child,
  .journal:nth-child(2) {
    border-bottom: 1px solid var(--color-base-1);
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
@media (min-width: 580px) {
  .journal:first-child {
    border-right: 1px solid var(--color-base-1);
  }
}
@media (min-width: 920px) {
  .journal {
    flex: 0 0 25%;
  }
}
@media (min-width: 580px) {
  .journal {
    flex: 0 0 50%;
  }
}
</style>
