import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy
} from "@angular/core";
import { matxAnimations } from "app/shared/animations/matx-animations";
import { ThemeService } from "app/shared/services/theme.service";
import tinyColor from "tinycolor2";
import PerfectScrollbar from "perfect-scrollbar";
import { AnalyticsService } from "./services/analytics.service";
import { Analytics } from "./models/analytics.model";

@Component({
  selector: "app-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.scss"],
  animations: matxAnimations
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;

  analyticsData: Analytics; 

  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  dailyTrafficChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;

  statCardList = [];

  productList = [];

  trafficSources = [];

  onGoingProjectList = [
    {
      icon: "start_border",
      color: "warn",
      title: "project 1"
    },
    {
      icon: "date_range",
      color: "primary",
      title: "project 2"
    },
    {
      icon: "start_border",
      color: "warn",
      title: "project 3"
    },
    {
      icon: "date_range",
      color: "accent",
      title: "project 4"
    }
  ];

  displayedColumns: string[] = ["name", "price", "available", "action"];

  constructor(private themeService: ThemeService, private analyticsService: AnalyticsService) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe(activeTheme => {
      this.initDoughNutPieOptions(activeTheme);
      this.initDailyTrafficChartBar(activeTheme);
    });
    this.getAnalyticsData();
  }

  getAnalyticsData() { 
    this.analyticsService.getAnalyticsData()
    .subscribe(
      (response: Analytics) => {  
      this.analyticsData = response; 
      this.productList = this.analyticsData.mostSoldCategory;
      this.trafficSources = this.analyticsData.trafficSources;
      this.statCardList = [
        {
          icon: "people",
          title: "Stock (No. of images)",
          amount: this.analyticsData.total_images_count,
          color: "primary"
        },
        {
          icon: "attach_money",
          title: "This week Sales",
          amount: this.analyticsData.this_week_sales,
          color: "primary"
        },
        {
          icon: "people",
          title: "New Stock (This Week)",
          amount: this.analyticsData.images_uploaded_this_week,
          color: "primary"
        },
        {
          icon: "attach_money",
          title: "Yesterday Sales",
          amount: this.analyticsData.yesterday_sales,
          color: "primary"
        } 
      ];
      this.initDailyTrafficChartBar(this.themeService.activatedTheme); 
      this.initDoughNutPieOptions(this.themeService.activatedTheme);
      }, 
      (err) => {  
      console.log(err); 
      } 
      );
  }

  initDoughNutPieOptions(theme) {
    this.doughNutPieOptions = {
      backgroundColor: "transparent",
      color: [
        "#f44336",
        "#ff9e43",
        "rgba(116, 103, 239, 1)"
      ],
      legend: {
        show: true,
        itemGap: 20,
        icon: "circle",
        bottom: 0,
        textStyle: {
          fontSize: 13,
          fontFamily: "roboto"
        }
      },
      tooltip: {
        show: true,
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      xAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],
      yAxis: [
        {
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          }
        }
      ],

      series: [
        {
          name: "Traffic Rate",
          type: "pie",
          radius: ["45%", "72.55%"],
          center: ["50%", "50%"],
          avoidLabelOverlap: false,
          hoverOffset: 0,
          emphasis: {disabled: true},
          stillShowZeroSum: false,

          label: {
            normal: {
              show: false,
              position: "center",
              textStyle: {
                fontSize: "13",
                fontWeight: "normal"
              },
              formatter: "{a}"
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: "15",
                fontWeight: "normal",
                color: "rgba(116, 103, 239, 1)"
              },
              formatter: "{b} \n{c} ({d}%)"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: this.trafficSources,

          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };
  }

  initDailyTrafficChartBar(theme) {
    this.dailyTrafficChartBar = {
      grid: {
        top: 16,
        left: 36,
        right: 16,
        bottom: 32
      },
      legend: {},
      tooltip: {
        show: true,
        trigger: "axis",

        axisPointer: {
          type: "cross",
          lineStyle: {
            opacity: 0
          }
        },
        crossStyle: {
          color: "#000"
        }
      },
      series: [
        {
          data: this.analyticsData.monthlySalesOfLastTwelveMonths,
          type: "line",
          areaStyle: {},
          smooth: true,
          lineStyle: {
            width: 2,
            color: "#fff"
          }
        }
      ],
      xAxis: {
        show: true,
        type: "category",
        showGrid: false,
        boundaryGap: false,
        data: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ],
        axisLabel: {
          color: "#ccc",
          margin: 20
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: "value",
        min: 10,
        max: 60,
        axisLabel: {
          color: "#ccc",
          margin: 20,
          fontSize: 13,
          fontFamily: "roboto"
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(255, 255, 255, .1)"
          }
        },

        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      color: [
        {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: "rgba(255,255,255,0.3)" // color at 0% position
            },
            {
              offset: 1,
              color: "rgba(255,255,255,0)" // color at 100% position
            }
          ],
          global: false // false by default
        }
      ]
    };
  }

  getProductStatus(value) {
    if (value) {
      if (value < 20) {
        return {
          color: "accent",
          status: `good`
        };
      } else
        return {
          color: "primary",
          status: `moderate`
        };
    } else
      return {
        color: "warn",
        status: `less`
      };
  }
}
