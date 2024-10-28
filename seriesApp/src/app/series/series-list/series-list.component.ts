import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  allSeries: Serie[] = []; // Para almacenar todas las series sin filtrar
  series: Serie[] = [];    // Para almacenar las series filtradas
  selectedSerie: Serie | null = null;
  averageSeasons: number = 0;
  searchText: string = '';

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data) => {
      this.allSeries = data;   // Guardamos todas las series originales
      this.series = data;       // Inicialmente, mostramos todas las series
      this.averageSeasons = this.getAverageSeasons();
    });
  }

  getAverageSeasons(): number {
    if (this.series.length === 0) return 0;
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    return totalSeasons / this.series.length;
  }

  selectSerie(serie: Serie): void {
    this.selectedSerie = serie;
  }

  applyFilter(): void {
    this.series = this.allSeries.filter(serie =>
      serie.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.averageSeasons = this.getAverageSeasons();
  }
}
