<template>
  <v-theme-provider dark style="min-height: 205px">
    <div
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: [0, 0.5, 1.0],
        },
      }"
    >
      <transition name="fade">
        <base-section
          v-show="isIntersecting"
          id="contact-us"
          class="primary"
          space="40"
        >
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="10">
                <base-title
                  :space="$vuetify.breakpoint.mdAndUp ? 0 : 4"
                  title="HAVE QUESTIONS? LET US KNOW!"
                />

                <base-body space="0">
                  <span class="white--text">
                    We have been leading the software industry since 2000 to
                    provide high quality, unique web appplication. All of our
                    software are customised by our designers to suit the
                    lifestyle of our clients, resulting in an exciting
                    experience.
                  </span>
                </base-body>
              </v-col>

              <v-col cols="12" md="2" class="mt-4">
                <base-btn
                  :block="$vuetify.breakpoint.smAndDown"
                  color="white"
                  href="/contact"
                  large
                  outlined
                >
                  Contact Us Now
                </base-btn>
              </v-col>
            </v-row>
          </v-container>
        </base-section>
      </transition>
    </div>
  </v-theme-provider>
</template>

<script>
import useIntersect from "@/composables/useIntersect";

export default {
  setup() {
    return { ...useIntersect() };
  },
};
</script>
