// src/app/components/series-list/series-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../series';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = [];
  selectedSerie: Serie | null = null;
  averageSeasons: number = 0;
searchText: any;

  constructor(private seriesService: SeriesService) { }

  ngOnInit(): void {
    this.series = this.seriesService.getSeries();
    this.averageSeasons = this.getAverageSeasons();
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
    this.series = this.seriesService.getSeries().filter(serie => 
      serie.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.averageSeasons = this.getAverageSeasons();
  }
  
}