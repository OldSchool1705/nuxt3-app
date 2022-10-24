<template>
  <div class="container mx-auto px-4">
    <BaseContent />
    <TheHeader />
    <BaseFooButton />
  </div>
</template>

<script lang="ts">
// import TheHeader from "~/сomponents/TheHeader.vue";
export default {
  components: {
    // TheHeader,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    func(e: number) {
      console.log(e);
    },
  },
};
</script>
