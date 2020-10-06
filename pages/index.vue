<template>
  <div>
    <Hero />

    <ThemeFeatures />

    <Features />

    <Affiliates />

    <ContactUs />

    <KeepInTouch />
  </div>
</template>

<script>
// Extensions
import View from "@/components/View";

export default {
  name: "Home",

  components: {
    Hero: () => import("@/components/sections/Hero"),
    ThemeFeatures: () => import("@/components/sections/ThemeFeatures"),
    Features: () => import("@/components/sections/Features"),
    Affiliates: () => import("@/components/sections/Affiliates"),
    ContactUs: () => import("@/components/sections/ContactUs"),
    KeepInTouch: () => import("@/components/sections/KeepInTouch"),
  },
  extends: View,

  props: {
    id: {
      type: String,
      default: "home",
    },
  },

  data: () => ({}),

  methods: {},

  head() {
    return {
      title: "Home",
    };
  },
};
</script>
