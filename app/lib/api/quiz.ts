import { supabase } from "../supabaseClient";

//get quiz
export const getQuiz = async ()=>{
    const {data, error}= await supabase
   .from('quizzes')
   .select("*")
   
   if(error) {
   console.log("Failed to get quiz:", error)
   }
   return {data, error}

}

//Create quiz
