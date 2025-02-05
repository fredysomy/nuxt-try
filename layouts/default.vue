<template>
  <div>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/secret/cc">Secret</nuxt-link></li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
      </ul>
    </nav>
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
nav {
  background-color: #333;
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

nav ul li {
  display: inline;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
