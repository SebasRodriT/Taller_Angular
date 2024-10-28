import { Injectable } from '@angular/core';
import { Serie } from '../series/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private series: Serie[] = [
    new Serie(1, "Hawkeye", "Disney+", 1, "Clint Barton y Kate Bishop unen fuerzas para enfrentar enemigos del pasado de Barton como Ronin, en una aventura ambientada durante la temporada navideña.", "https://www.disneyplus.com/es-co/series/hawkeye/11Zy8m9Dkj5l", "https://terrigen-cdn-dev.marvel.com/content/prod/1x/hawkeye_lob_crd_03.jpg"),
    new Serie(2, "The Mandalorian", "Disney+", 2, "Un cazarrecompensas solitario se aventura en los confines de la galaxia, lejos de la autoridad de la Nueva República.", "https://www.disneyplus.com/es-co/series/the-mandalorian/3jLIGMDYINqD", "https://pics.filmaffinity.com/the_mandalorian_2-903747371-large.jpg"),
    new Serie(3, "WandaVision", "Disney+", 1, "Combina el estilo de las comedias clásicas con el Universo Cinematográfico de Marvel, donde Wanda y Vision sospechan que no todo es lo que parece.", "https://www.disneyplus.com/es-co/series/wandavision/4SrN28ZjDLwH", "https://i.pinimg.com/550x/54/f1/79/54f1791aecb355d63e950faa12231bd4.jpg"),
    new Serie(4, "Stranger Things", "Netflix", 4, "Un grupo de amigos jóvenes presencia fuerzas sobrenaturales y experimentos secretos del gobierno en su pequeño pueblo.", "https://www.netflix.com/co/title/80057281?source=35", "https://www.ecartelera.com/carteles-series/100/124/021_m.jpg"),
    new Serie(5, "Loki", "Disney+", 2, "El Dios del Engaño sale de la sombra de su hermano para embarcarse en una aventura que tiene lugar después de los eventos de 'Avengers: Endgame'.", "https://www.disneyplus.com/es-co/series/loki/6pARMvILBGzF", "https://img-tomatazos.buscafs.com/415970/415970.jpeg"),
    new Serie(6, "Moon Knight", "Disney+", 1, "Steven Grant y el mercenario Marc Spector investigan los misterios de los dioses egipcios desde dentro del mismo cuerpo.", "https://www.disneyplus.com/es-co/series/moon-knight/4S3oOF1knocS", "https://m.media-amazon.com/images/M/MV5BNDAzNmYwZjgtNDc3YS00ZDMyLTk0MjktMTg4MGNmNGU3MjlhXkEyXkFqcGc@._V1_.jpg"),
    new Serie(7, "The Falcon and the Winter Soldier", "Disney+", 1, "Sam Wilson y Bucky Barnes se unen en una aventura global que pone a prueba sus habilidades y su paciencia.", "https://www.disneyplus.com/es-co/series/the-falcon-and-the-winter-soldier/4gglDBMx8icA", "https://m.media-amazon.com/images/I/714sCbJA+xL._AC_UF894,1000_QL80_.jpg"),
    new Serie(8, "Friends", "NBC", 10, "Sigue la vida personal y profesional de seis amigos veinteañeros que viven en Manhattan.", "https://www.max.com/co/es/shows/friends/52dae4c7-2ab1-4bb9-ab1c-8100fd54e2f9?utm_source=universal_search", "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/07/poster-friends.jpg?tf=1200x"),
    new Serie(9, "The Simpsons", "Fox", 33, "Serie animada sobre una familia de clase trabajadora en la peculiar ciudad de Springfield.", "https://www.disneyplus.com/es-co/series/the-simpsons/3ZoBZ52QHb4x", "https://m.media-amazon.com/images/M/MV5BNTU2OWE0YWYtMjRlMS00NTUwLWJmZWUtODFhNzJiMGJlMzI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"),
    new Serie(10, "The Crown", "Netflix", 4, "Narra la vida de la Reina Isabel II desde los años 40 hasta los tiempos modernos.", "https://www.netflix.com/co/title/80025678?source=35", "https://resizing.flixster.com/aX9Yz5sNV2WpBA5CoENzIl9RbTM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vUlRUVjI2NTU1OS53ZWJw")
  ];

  constructor() { }

  getSeries(): Serie[] {
    return this.series;
  }
}