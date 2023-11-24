let searchBox = document.getElementById("search_box");


searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch(e.target.value);
    }
  });
  
  getResponse();

   async function getResponse(){
    const url = 'https://fl6ikdsevf.execute-api.us-east-1.amazonaws.com/Testing';
    const response = await fetch(url);
    console.log(response);
   }


  function handleSearch(value){

    console.log(value);
  }
