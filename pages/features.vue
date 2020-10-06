<template>
  <div style="background-color: white">
    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <template v-slot:opposite>
          <v-lazy
            v-model="isActive[i]"
            :options="{
              threshold: 0.8,
            }"
            min-height="300"
            transition="scroll-y-transition"
          >
            <v-img
              :src="item.file"
              max-width="700"
              style="border-radius: 30%"
            />
          </v-lazy>
        </template>
        <v-lazy
          v-model="isActive[i]"
          :options="{
            threshold: 0.8,
          }"
          min-height="300"
          transition="scroll-y-transition"
        >
          <v-card :color="item.color" dark>
            <v-card-title class="title">{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
            <v-card-text class="white text--primary">
              <p v-html="item.text"></p>
            </v-card-text>
          </v-card>
        </v-lazy>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "RecentProjects",
  components: {},

  data: function () {
    return {
      isActive: [],

      items: [
        {
          title: "Manage your business from anywhere and anytime",
          subtitle: "Access to real-time data at the touch of your fingertips",
          text: `
<ul>
<li>Real-time access to your business data and can edit tasks on the fly.</li>
<li>Suitable for laptop, phone and iPad</li>
<li>Get real time reports for late tasks, worker locations and much more.</li>
<li>Get all your data from our reporting suite.</li>
</ul>
          `,
          color: "teal darken-1",
          icon: "mdi-star",
          file: "Documents/features/1.png",
        },
        {
          title: "Automated Rostering/Schedule",
          subtitle: "Let the software think for you",
          text: `
<ul>
<li>Our state-of-the-art rostering helps you create rosters automatically, with one click and make the decision making simple.</li>
<li>Real-time access to rostering/schedule</li>
<li>Get a forward view of upcoming roster schedules</li>
<li>Manually adjustment</li>
<li>Multiple views for daily, weekly, monthly</li>
</ul>
          `,
          color: "purple darken-1",
          icon: "mdi-book-variant",
          file: "Documents/features/2.png",
        },
        {
          title: "Real-time Notification and Feedback",
          subtitle: "Avoid unwanted overdue or delay of your projects",
          text: `
<ul>
<li>Notification on upcoming tasks for any potential overtime issues</li>
<li>Get real-time feedback during rostering/working</li>
<li>Broadcast message out to all employees</li>
<li>Notify employees of any incidents in their work area that they need to be aware of</li>
<li>Keep a record of all communications</li>
<li>Monitor staff attendance and be alerted when a task has not been started</li>
<li>Staff can easily start and complete timesheets during their task which will automatically appear in the software for your review</li>
<li>View and respond to messages</li>
</ul>
          `,
          color: "green lighten-1",
          icon: "mdi-airballoon",
          file: "Documents/features/3.png",
        },
        {
          title: "GPS tracking and monitoring",
          subtitle: "Let our platform records anything",
          text: `
<ul>
<li>Know where your employees are at all times with GPS tracking</li>
<li>Determine fastest route and track the mileage</li>
<li>Real-time monitoring </li>
<li>Review employees' location</li>
</ul>
          `,
          color: "indigo",
          icon: "mdi-map-marker-multiple",
          file: "Documents/features/4.png",
        },
        {
          title: "Project/Client/Document Management",
          subtitle: "Never lose your important information",
          text: `
<ul>
<li>Have all your project/client information in one central secure location -- Amazon Web Services (AWS) Cloud Service.</li>
<li>Use the document repository to manage all the files relating to the project/client</li>
<li>Record and maintain all project/client information, and report on this information</li>
<li>Our platform allows clients/employees to view schedules, request changes and new services and also rate the worker at the end of the task!</li>
<li>Manage all employee/supplier/sub-contractor details in one secure area.</li>
</ul>
          `,
          color: "amber darken-3",
          icon: "mdi-sitemap",
          file: "Documents/features/5.png",
        },
        {
          title: "Quotation and Reporting Builder",
          subtitle: "Remove double handling of data",
          text: `
<ul>
<li>Create personalised quotation PDF forms</li>
<li>Easily send and review quotation or order email</li>
<li>Unlimited number of forms and reports per project</li>
<li>Monitor business performance with real-time reporting on your key metrics</li>
<li>Access your dashboard online so you can always keep track of your business</li>
<li>Our platform allows you to connect our platform to your existing software meaning data can be export and import directly to and from other software.</li>
</ul>
          `,
          color: "green darken-3",
          icon: "mdi-buffer",
          file: "Documents/features/6.png",
        },
      ],
    };
  },

  computed: {},
  watch: {},
  created() {},
  mounted() {},

  methods: {},

  head() {
    return {
      title: "Features",
    };
  },
};
</script>
