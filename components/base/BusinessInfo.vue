<template>
  <v-theme-provider :dark="dark">
    <div>
      <base-info-card title="KEEP IN TOUCH WITH US" pace="6"> </base-info-card>

      <base-business-contact dense />
    </div>
  </v-theme-provider>
</template>

<script>
export default {
  name: "BaseBusinessInfo",

  props: { dark: Boolean },

  data: () => ({}),
};
</script>
