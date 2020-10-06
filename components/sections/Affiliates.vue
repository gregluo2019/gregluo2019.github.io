<template>
  <base-section
    id="affiliates"
    class="grey lighten-4"
    space="36"
    style="min-height: 202px"
  >
    <div
      v-intersect="{
        handler: onIntersect,
      }"
    >
      <transition name="slide-fade">
        <div v-show="isIntersecting">
          <base-section-heading title="Our partners" />

          <v-slide-group>
            <template v-for="n in 5">
              <v-slide-item :key="n" class="align-self-center">
                <base-img
                  :src="require(`@/assets/pic/partners/${n}.png`)"
                  color="grey"
                  contain
                  height="40"
                  width="128"
                />
              </v-slide-item>

              <v-responsive
                v-if="n < 8"
                :key="`divider-${n}`"
                class="text-center"
                height="10"
                width="10"
              >
                <v-divider vertical />
              </v-responsive>
            </template>
          </v-slide-group>
        </div>
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
