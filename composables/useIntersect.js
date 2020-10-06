import { ref } from "@vue/composition-api";

export default function () {
  const isIntersecting = ref(true);

  const onIntersect = (entries) => {
    if (
      entries[0].intersectionRatio > 0 &&
      entries[0].intersectionRatio < 0.2
    ) {
      isIntersecting.value = false;
      setTimeout(() => {
        isIntersecting.value = true;
      }, 500);
    }
  };

  return { isIntersecting, onIntersect };
}
