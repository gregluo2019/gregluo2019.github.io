<template>
  <base-section id="theme-features" style="min-height: 873px">
    <base-section-heading title="Benefits"> </base-section-heading>

    <v-container>
      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="6">
          <div
            v-intersect="{
              handler: (entries) => onIntersect(entries, i),
            }"
          >
            <transition name="slide-fade">
              <base-avatar-card
                v-if="isIntersecting[i]"
                v-bind="feature"
                align="left"
                horizontal
              >
              </base-avatar-card>
            </transition>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
export default {
  name: "SectionThemeFeatures",

  data: () => ({
    isIntersecting: [true, true, true, true, true, true],
    features: [
      {
        title: "Save your time and effort",
        text:
          "We providing a secure online web application where you can seamlessly manage your projects, tasks, clients, employees, etc. Avoid endless threads and missing files by keeping everything in the same platform, available anytime, anywhere",
        icon: "mdi-run",
        color: "primary",
        dark: true,
      },
      {
        title: "Improve productivity and efficiency",
        text:
          "You are able to access to real-time data and manage your business from anywhere and anytime via laptop or phone at the touch of your fingertips.",
        icon: "mdi-diamond",
        color: "primary",
        dark: true,
      },
      {
        title: "Easy to manage your projects and team",
        text:
          "Have all your projects information in one central secure location. Easily manage activities, rostering, clients, employees, suppliers, user preferences and much more from one screen.",
        color: "primary",
        dark: true,
        icon: "mdi-view-quilt",
      },
      {
        title: "Artificial Intelligence",
        text:
          "Our state-of-the-art platform helps you create schedule and reports automatically, with one click and make the decision making simple.",
        icon: "mdi-android",
        color: "primary",
        dark: true,
      },

      {
        title: "Improve your team's coordination",
        text:
          "With effective timeline and Gantt charts, you can make sure your team's workflow and handovers run smoothly.",
        color: "primary",
        dark: true,
        icon: "mdi-gamepad",
      },
      {
        title: "Automate your team's workflow",
        text:
          "Free your team from the repetitive manual tasks, so they can focus on real impact and innovation.",
        icon: "mdi-shape-plus",
        color: "primary",
        dark: true,
      },
    ],
  }),

  methods: {
    onIntersect(entries, i) {
      if (entries[0].intersectionRatio > 0) {
        this.isIntersecting[i] = false;
        setTimeout(() => {
          this.isIntersecting[i] = true;
          this.isIntersecting = Object.assign({}, this.isIntersecting);
        }, 0);
      }
    },
  },
};
</script>
