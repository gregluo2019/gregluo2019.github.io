<template>
  <base-section id="features" class="secondary" style="min-height: 537px">
    <v-responsive class="mx-auto" max-width="1350">
      <div
        v-intersect="{
          handler: onIntersect,
          options: {
            threshold: [0],
          },
        }"
      >
        <transition name="page">
          <v-container v-show="isIntersecting" fluid>
            <v-row>
              <v-col
                v-for="card in cards"
                :key="card.title"
                cols="12"
                sm="6"
                md="3"
              >
                <base-info-card align="center" dark v-bind="card" />
              </v-col>
            </v-row>
          </v-container>
        </transition>
      </div>
    </v-responsive>
  </base-section>
</template>

<script>
import useIntersect from "@/composables/useIntersect";

export default {
  name: "SectionFeatures",
  setup() {
    return { ...useIntersect() };
  },
  data: () => ({
    cards: [
      {
        icon: "mdi-music-circle",
        title: "Personal and Customizing",
        text:
          "Whatever the software you want in mind, we’ll listen to your ideas and implement it to perfectly fit your requirements.",
      },
      {
        icon: "mdi-account-multiple-plus",
        title: "Development Team",
        text:
          "With a clear objective provided by you, our product development team will collaborate with you to define a path and execute the delivery with precision and absolute transparency. Our teams work in a range of technologies.",
      },
      {
        icon: "mdi-camera-iris",
        title: "Agility and Fast",
        text:
          "Change is inevitable, your competitive advantage is your ability to rapidly adapt to market forces, we ensure you can. Ask us how we can help.",
      },
      {
        icon: "mdi-panda",
        title: "Great Teams",
        text:
          "We have highly cross functional teams with the skills needed to deliver your project. Whether that's a software team, a support team or a consulting engagement.",
      },
    ],
  }),
};
</script>
