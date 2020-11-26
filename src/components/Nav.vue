<template>
  <nav>
    <div id="logo"></div>
    <ul>
      <li>Home</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
nav {
  height: 15vh;
  margin: 0;
  background: #434343;

  #logo {
    display: inline-block;
    width: 150px;
    height: 100%;
    background: red;
  }

  ul {
    width: 100%;
    height: 100%;
    margin-left: 150px;
    display: inline-block;
    list-style-type: none;
    li {
      place-items: center;
    }
  }
}
</style>