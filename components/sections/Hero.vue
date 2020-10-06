<template>
  <section id="hero">
    <v-carousel
      cycle
      interval="5000"
      height="1080"
      style="overflow-y: auto"
      hide-delimiters
      :show-arrows="false"
    >
      <v-carousel-item v-for="item in items" :key="item.src">
        <v-img
          :src="item.src"
          height="1080"
          gradient="to top right, rgba(5, 11, 31, .5), rgba(5, 11, 31, 0)"
        >
          <v-container class="fill-height px-4 py-12">
            <v-responsive
              class="d-flex align-center"
              height="100%"
              max-width="700"
              width="100%"
            >
              <!-- <v-sheet color="grey lighten-1" class="pa-5" elevation="6"> -->
              <base-heading
                :title="item.title"
                shadow="shadow"
                size="text-h2"
              />
              <base-divider
                color="primary"
                :width="item.title ? item.title.length * 27 : 0"
              />
              <base-body
                :my-class="
                  $vuetify.breakpoint.smAndDown
                    ? 'white--text  text-body-1 shadow'
                    : 'white--text  text-h4 shadow'
                "
              >
                {{ item.text }}
              </base-body>
              <div
                :class="
                  $vuetify.breakpoint.smAndDown
                    ? 'flex-column align-start'
                    : 'align-center'
                "
                class="d-flex flex-wrap"
              >
                <base-btn
                  :block="$vuetify.breakpoint.smAndDown"
                  to="/features"
                  x-large
                  rounded
                >
                  Discover More
                </base-btn>
              </div>
              <!-- </v-sheet> -->
            </v-responsive>
          </v-container>
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </section>
</template>

<script>
export default {
  name: "SectionHero",

  provide: {
    theme: { isDark: true },
  },
  data() {
    return {
      items: [
        {
          src: "./pic/1.jpg",
          title: "Simplicy",
          text:
            "We help managers save time and effort by providing a secure online web application where they can seamlessly manage their projects and tasks.",
        },
        {
          src: "./pic/2.jpg",
          title: "Customization",
          text:
            "We implement unique web application that 100% customized by you and perfectly suit for your business.",
        },
        {
          src: "./pic/3.jpg",
          title: "Automation",
          text:
            "Let the software think for you and automatically arrange rostering and schedule for you.",
        },
        {
          src: "./pic/4.jpg",
          title: "Manage Your Business from Anywhere and Anytime",
          text:
            "Access to real-time data at the touch of your fingertips on laptop, phone, and iPad.",
        },
        {
          src: "./pic/5.jpg",
          title: "Project / Client / HR Management",
          text:
            "Easily manage your projects, tasks, schedule, clients, employees, suppliers, and sub-contractors.",
        },
        {
          src: "./pic/6.jpg",
          title: "Real-time Notification, Monitoring and Feedback",
          text:
            "Avoid unwanted overdue or delay of your projects. Know where your employees are at all times with GPS tracking. Get instantly feedback from your clients",
        },
        {
          src: "./pic/7.jpg",
          title: "One-click Generation of Reports and Quotations",
          text:
            "Easily send emails and generate all kinds of reports and quotations.",
        },
      ],
    };
  },
  computed: {},
};
</script>
