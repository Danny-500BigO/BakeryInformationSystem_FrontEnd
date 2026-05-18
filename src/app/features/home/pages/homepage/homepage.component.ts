import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DefaultMenubarComponent } from "../../../../shared/ui/Menubars/default-menubar/default-menubar.component";
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,ButtonModule, MenubarModule, DefaultMenubarComponent, CardModule, ChartModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomeComponent {
  basicData: any;

  basicOptions: any;

  data: any;

    options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.basicData = {
      labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      datasets: [
        {
          label: 'Sales',
          data: [540, 325, 702, 620, 500],
          backgroundColor: ['#91d0ff', '#2986cc', '#ffd6a8', '#efa14b'],
          // borderColor: [],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
    
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              type: 'bar',
              label: 'Pending',
              backgroundColor: '#ffb703',
              data: [50, 25, 12, 48, 90, 76, 42],
              borderWidth: 1
          },
          {
              type: 'bar',
              label: 'In Progress',
              backgroundColor: '#2dc653',
              data: [21, 84, 24, 75, 37, 65, 34],
              borderWidth: 1
          },
          {
              type: 'bar',
              label: 'Completed',
              backgroundColor: '#0496ff',
              data: [41, 52, 24, 74, 23, 21, 32],
              borderWidth: 1
          }
      ]
  };

  this.options = {
    maintainAspectRatio: false,
    aspectRatio: 0.8,
    plugins: {
        tooltip: {
            mode: 'index',
            intersect: false
        },
        legend: {
            labels: {
                color: textColor
            }
        }
    },
    scales: {
        x: {
            stacked: true,
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        },
        y: {
            stacked: true,
            ticks: {
                color: textColorSecondary
            },
            grid: {
                color: surfaceBorder,
                drawBorder: false
            }
        }
    }
};  
  }
}
