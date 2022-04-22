<template>
  <span>
    <h1 class="header">Footers</h1>
    <h2>Footer 1</h2>
    <footerBlockUnderInlineVue />
    <h2>Footer 2</h2>
    <footerBlockUnderVerticalVue />
    <h2>Footer 3</h2>
    <footer_two_side />
    <h2>Footer 4</h2>
    <footerIconLeftContactRight />
    <br />
  </span>
</template>

<script>
import footerBlockUnderInlineVue from "../components/footers/footer-block-under-inline.vue";
import footer_two_side from "../components/footers/footer-two-side.vue";
import footerBlockUnderVerticalVue from "../components/footers/footer-block-under-vertical.vue";
import footerIconLeftContactRight from "../components/footers/footer-iconLeft-contactRight.vue";

export default {
  name: "footers-all",
  components: {
    footerBlockUnderInlineVue,
    footer_two_side,
    footerBlockUnderVerticalVue,
    footerIconLeftContactRight,
  },
};

//fix footer, add scroll open effect
</script>

<style>
body {
  background-color: rgb(70, 70, 70);
  margin: 0%;
}

.header {
  text-align: center;
  color: rgb(214, 214, 214);
  font-size: 40px;
  text-decoration: underline;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>

