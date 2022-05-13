import {ref} from "vue";

export default function () {
  
    const transactions = ref([]);
    const error = ref(null);

    const fetchAll = async () => {
      try{
        const res = await fetch("http://localhost:3000/transactions");
        if(!res.ok) throw new Error("Fetching transaction failed");
          transactions.value = await res.json();
      }catch(err){
          error.value = err;
          console.log(err.value);
      } 
  }
  
    return{ fetchAll , transactions , error }
  
}
