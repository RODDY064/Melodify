export function extractPrecedingSentence(text, keyword) {
    if(!text){
      return
    }
    
    const sentences = text.split('. '); // Split the text into sentences based on periods.
    let precedingSentence = null;
  
    for (const sentence of sentences) {
      if (sentence.includes(keyword)) {
        // If the sentence contains the keyword, we stop and return the preceding sentence.
        break;
      } else {
        precedingSentence = sentence;
      }
    }
  
    return precedingSentence;
  }
  
