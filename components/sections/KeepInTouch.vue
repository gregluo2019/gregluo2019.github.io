<template>
  <base-section id="info-alt" space="56" style="min-height: 656px">
    <div
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
    >
      <transition name="page">
        <v-container v-show="isIntersecting">
          <v-row justify="space-between">
            <v-col cols="12" md="5">
              <base-business-info title="KEEP IN TOUCH WITH US">
              </base-business-info>
            </v-col>

            <v-col cols="12" md="6">
              <base-contact-form title="MAIL US YOUR MESSAGE" />
            </v-col>
          </v-row>
        </v-container>
      </transition>
    </div>
  </base-section>
</template>

<script>
import useIntersect from "@/composables/useIntersect";

export default {
  setup() {
    return { ...useIntersect() };
  },
};
</script>
