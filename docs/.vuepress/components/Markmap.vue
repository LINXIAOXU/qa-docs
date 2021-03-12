<script>
export default {
  functional: true,
  props: {
    text: String
  },
  render(
    h,
    {
      props,
      slots,
      parent: { $page }
    }
  ) {
    return h(
      "a",
      {
        class: "mindmap",
        attrs: { href: `/mindmap.html?md=/docs/${$page.relativePath}`, target: "_blank" }
      },
      [
        h("img", {
          attrs: { src: "/mindmap.svg" }
        })
      ]
    );
  }
};
</script>

<style lang="stylus" scoped>
.mindmap img {
  height: 1em;
}
</style>