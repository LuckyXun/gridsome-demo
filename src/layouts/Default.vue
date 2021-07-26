<template>
  <div class="layout sticky-header">
    <header class="header sticky">
      <div class="container">
        <div class="left">
          <g-link
            to="/"
            class="home-link active"
          >
            <g-image
              src="../assets/img/logo.svg"
              class="logo"
            />
          </g-link>
        </div>
        <nav class="nav right">
          <g-link
            to="/journal"
            class="nav__link"
          >Journal</g-link>
          <g-link
            to="/contact"
            class="nav__link"
          >Say Hi!</g-link>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="footer">
      <div class="container"><span>Copyright © 2021</span></div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  
}
</script>


<style lang="css">
* {
  box-sizing: border-box;
}

body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 16px;
  --color-base: #fff;
  --color-base-1: #f3f3f3;
  --color-contrast: #000;
  --color-contrast-1: #2b2b2b;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}

.sticky-header {
  padding: 6rem 0 0;
}
.header.sticky {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.header {
  position: relative;
  height: 6rem;
  z-index: 10;
}
.header > .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav > * {
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 4px;
  margin-right: 3rem;
  color: #000;
  padding-bottom: 4px;
  border-bottom: 1px solid;
  border-color: transparent;
  transition: border 0.15s;
}

.nav > *:hover {
  border-bottom: 1px solid;
}
.footer {
  font-size: 0.8rem;
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}
</style>
