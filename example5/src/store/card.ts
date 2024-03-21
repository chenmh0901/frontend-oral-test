import { defineStore } from "pinia";
import { createApp, ref } from "vue";
import Card from "../components/card.vue";

export const useCardStore = defineStore("card", () => {
  const cardManager = ref({ amount: 0, leftAmount: 0, rightAmount: 0 });
  const cardArray = ref<number[]>([]);
  const setCardAmount = (val: number) => {
    cardArray.value = [];
    for (let i = 0; i < val; i++) {
      cardArray.value.push(i);
    }
  };

  const addCard = () => {
    const card = createApp(Card);

    // StaticClassManager.staticCardCreated(card);

    /**
     * create card component and mount it to the body
     */
    const cardEl = document.createElement("div");
    document.body.appendChild(cardEl);
    // beforeMounted()
    // END

    card.mount(cardEl);
    // onMounted()
    // END
    cardManager.value.amount++;
    cardManager.value.leftAmount++;
  };
  return { setCardAmount, addCard, cardArray, cardManager };
});
class StaticCardManager {
  static amount: number = 0;
  static staticCardCreated(card: ReturnType<typeof createApp>) {
    StaticCardManager.amount++;
  }
}
