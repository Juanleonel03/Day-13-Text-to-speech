const button = document.getElementById('button');
button.addEventListener('click', ()=>{
  let textArea = document.getElementById('textArea').value;

  let speech = new SpeechSynthesisUtterance();
  speech.text = textArea;
  speech.rate = 1;
  speech.lang = 'en-US';
  speech.volume = 1;
  speech.pitch = 1;

  speechSynthesis.speak(speech);
})

/* 
What’s your name?
hello, how are you?
Do you like living in Australia?
Where are you from?
this is a text-to-speech created with javascript 
*/