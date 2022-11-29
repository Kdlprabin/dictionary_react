export default function Api() {
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  let word = document.getElementById("word").value;
  let completeUrl = url+word;
  fetch(completeUrl)
    .then((response) => response.json())
    .then((response) => {
      console.log(response[0].meanings[0].synonyms);
      var synonyms = response[0].meanings[0].synonyms;
      var synonym = "";
      for(var i =0; i < synonyms.length; i++){
        synonym += synonyms[i] + ', ';
      }
      var word = response[0].word;
      var wordMeaning = response[0].meanings[0].definitions[0].definition;
      document.getElementById("wordMeaning").innerHTML = word;
      document.getElementById("definition").innerHTML = wordMeaning;
      document.getElementById("synonyms").innerHTML = synonym;
    });
}
