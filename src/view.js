// estas funciones son de ejemplo

export const renderItems = (data) => {
  const films = data.films;
  let titlesHTML = "";

  //identificacmos los datos de las peliculas
  films.forEach((movie) => {
    titlesHTML += `
    <li>
   <img src=${movie.poster}/>
   </li>`;
  });

  return titlesHTML;
};
//<h3>${movie.title}</h3>
//<p>${movie.description}</p>