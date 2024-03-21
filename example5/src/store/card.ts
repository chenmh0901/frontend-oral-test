import {defineStore} from 'pinia'
import {ref} from "vue";

export const useCardStore = defineStore('counter',()=>{

    const cardArray=ref<number[]>([]);
    const setCardNumber=(val:number)=>{
        cardArray.value=[];
        for (let i=0;i<val;i++){
            cardArray.value.push(i);
        }
    }

    return {setCardNumber,cardArray};
})
