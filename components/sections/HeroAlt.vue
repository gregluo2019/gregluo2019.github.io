<template>
  <v-theme-provider dark>
    <section id="hero-alt">
      <!--  :gradient="gradient" gradient="to top right, rgba(5, 11, 31, .8), rgba(5, 11, 31, .3)" -->
      <!-- -->
      <base-img
        gradient="to top right, rgba(5, 11, 31, .7), rgba(5, 11, 31, 0.2)"
        :src="src"
        flat
        max-height="100%"
        tile
      >
        <v-container class="fill-height px-4 py-12">
          <v-responsive
            class="d-flex align-center"
            height="100%"
            max-width="700"
            width="100%"
          >
            <base-heading :title="title" space="2" weight="500" />

            <base-divider
              color="primary"
              :width="title ? title.length * 20 : 0"
            />

            <base-body
              v-if="$route.name != 'aboutUs'"
              :my-class="
                $vuetify.breakpoint.smAndDown
                  ? 'white--text  text-body-1 '
                  : 'white--text  text-h6 '
              "
            >
              This is an excellent project management software. EasyManagement
              offers fast and very customizable management, especially in when
              it comes to team tasks added to each project.
            </base-body>

            <base-body
              v-if="$route.name === 'aboutUs'"
              :my-class="
                $vuetify.breakpoint.smAndDown
                  ? 'white--text  text-body-1 '
                  : 'white--text  text-h6 '
              "
            >
              EasyManagement provides project management software platform that
              makes effective teamwork possible. We provide a truly magnificent
              project management tool that has an endless number of functions
              and features that allows me easy collaboration and communication
              with team members.
            </base-body>

            <base-body
              v-if="$route.name === 'aboutUs'"
              :my-class="
                $vuetify.breakpoint.smAndDown
                  ? 'white--text  text-body-1 '
                  : 'white--text  text-h6 '
              "
            >
              <ul>
                <li>Simplicy</li>
                <li>Customization</li>
                <li>Automation</li>
                <li>Manage Your Business from Anywhere and Anytime</li>
                <li>Project / Client / HR Management</li>
                <li>Real-time Notification, Monitoring and Feedback</li>
                <li>One-click Generation of Reports and Quotations</li>
              </ul>
            </base-body>
          </v-responsive>
        </v-container>
      </base-img>
    </section>
  </v-theme-provider>
</template>

<script>
// Components
import { HexToRGBA, RGBAtoCSS } from "vuetify/lib/util/colorUtils";

export default {
  name: "SectionHeroAlt",

  metaInfo() {
    return {
      changed: (meta) => {
        this.title = meta.titleChunk.toUpperCase();
      },
    };
  },

  provide: {
    heading: { align: "center" },
  },

  data: () => ({}),

  computed: {
    gradient() {
      const color = `${this.$vuetify.theme.themes.light.secondary}CC`;
      const overlay = RGBAtoCSS(HexToRGBA(color));

      return `to top, ${overlay}, ${overlay}`;
    },
    title() {
      if (this.$route.name === "aboutUs") {
        return "About Us";
      } else {
        return "Contact Us";
      }
    },
    src() {
      if (this.$route.name === "aboutUs") {
        return "./pic/aboutus.jpg";
      } else {
        return "./pic/contact.jpg";
      }
    },
    items() {
      return [{ text: "HOME", to: "/" }, { text: this.title }];
    },
  },
};
</script>

<style lang="sass">
#hero-alt
  .v-breadcrumbs__item
    color: #FFFFFF
</style>
