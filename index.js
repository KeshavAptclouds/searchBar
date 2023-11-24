let searchBox = document.getElementById("search_box");


searchBox.addEventListener("keyup", (e) => {
      e.preventDefault();
      handleSearch(e.target.value);
  });
  
  getResponse();

  let cities = [];

  async function getResponse(){
    const url = 'https://fl6ikdsevf.execute-api.us-east-1.amazonaws.com/Testing';
    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(data.body);
      data.body.forEach((item) => {
        cities.push(item.City);
    });
    })
   }


  function handleSearch(value){
    console.log(value);
    let list = document.getElementById("myList");
    list.innerHTML = "";
    if(value != undefined && value != ''){
      
      let searchResult = cities.filter(item => (item.toLowerCase().startsWith(value.toLowerCase())));
      searchResult.forEach( item => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });
    }
    
  }
