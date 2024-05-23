import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/pages/apps/coche/interfaces/Coche.model';
import { CocheService } from 'src/app/pages/apps/coche/services/coche.service';

@Component({
  selector: 'app-sales-ratio',
  templateUrl: './sales-ratio.component.html',
  styleUrls: []
})
export class SalesRatioComponent implements OnInit {
  coches: Coche[] = [];
  salesChartOptions: any = {};

  constructor(private cocheService: CocheService) { }

  ngOnInit(): void {
    this.getCoches();
  }

  getCoches(): void {
    this.cocheService.getCoches().subscribe(coches => {
      this.coches = coches;
      this.updateChartOptions();
    });
  }

  updateChartOptions(): void {
    this.salesChartOptions = {
      series: [{
        name: 'Price',
        data: this.coches.map(coche => coche.precio)
      }],
      chart: {
        height: 350,
        type: 'bar'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: this.coches.map(coche => coche.nombreModelo)
      },
      yaxis: {
        title: {
          text: 'Price (€)'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val: string) {
            return "€ " + val;
          }
        }
      }
    };
  }
}


