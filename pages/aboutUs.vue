<script>
// Extensions
import View from "@/components/View";

// Mixins
import LoadSections from "@/mixins/load-sections";

export default {
  extends: View,

  head() {
    return {
      title: "About Us",
    };
  },

  mixins: [
    LoadSections([
      "hero-alt",
      //   "about-our-product",
      "theme-features",
      "affiliates",
      // "newsletter",
      // "pro-features",
      //"info",
    ]),
  ],

  props: {
    id: {
      type: String,
      default: "about",
    },
  },
};
</script>
