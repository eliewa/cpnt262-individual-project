const apiData = {
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon',
  id: '',
}




const generateHtml = (data) => {
 
const html = `
  <article>
    <div class ="name">${data.name.toUpperCase()}</div>
    <img src = ${data.sprites.front_default} class = "animal">
    <div class = "details">
      <span>Height: ${data.height*10} cm</span>
      <span>Weight: ${data.weight} lbs</span>
      <span>Base XP: ${data.base_experience}
    </div>
  </article>
  `
  const pokeDiv = document.querySelector('.pokemon');
  // console.log(data)
  pokeDiv.innerHTML += html;
  }


const gallery = async () => {
  apiData.id = '1';

  parseInt(apiData.id);
  try {
    for (apiData.id; apiData.id <= 100; apiData.id ++) {
      String(apiData.id);
      const apiUrl = `${apiData.url}${apiData.type}/${apiData.id}`;
      console.log(apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (!response.ok) {
        throw '404 error' 
      } else {
        parseInt(apiData.id);
        generateHtml(data); 
      }
        
   }
  
  }

  catch {
    document.querySelector('.pokemon').innerHTML = '<h2>404 Sorry Page Not Found</h2> <img src = "./assets/images/sad-face.jpg"> ';
  }
}

gallery();
