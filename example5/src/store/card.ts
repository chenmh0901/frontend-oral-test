import { defineStore } from "pinia";
import { createApp, ref } from "vue";
import Card from "../components/card.vue";

export const useCardStore = defineStore("counter", () => {
  const cardManager = ref({ amount: 0, leftAmount: 0, rightAmount: 0 });
  const cardArray = ref<number[]>([]);
  const setCardAmount = (val: number) => {
    cardArray.value = Array.from({ length: val }, (_, i) => i);
  };

  const addCard = () => {
    const card = createApp(Card);
    
    // StaticClassManager.staticCardCreated(card);

    /**
     * create card component and mount it to the body
     */
    const cardEl = document.createElement("div");
    cardManager.value.amount++;
    cardManager.value.leftAmount++;
    document.body.appendChild(cardEl);
    // beforeMounted()
    // END

    card.mount(cardEl);
    // onMounted()
    // END
  };
  return { setCardAmount, cardArray, addCard, cardManager };
});
class StaticCardManager {
  static amount: number = 0;
  static staticCardCreated(card: ReturnType<typeof createApp>) {
    StaticCardManager.amount++;
  }
}
