$(function(){
  Date.prototype.daysMoreLess =
       Date.prototype.daysMoreLess ||
       function(days){
         days = days || 0;
         var ystrdy = new Date(this.setDate(this.getDate()+days));
         this.setDate(this.getDate() + -days);
         return ystrdy;
 };

  var lengthOfTime = 5;
  // implement button click functionality
  // $('#button-7-days').click(function () {
  //   var lengthOfTime = 7;
  //   lineChart.load(data);
  // });
  // $('#button-30-days').click(function () {
  //   var lengthOfTime = 30;
  //   lineChart.load(data);
  // });
  // $('#button-365-days').click(function () {
  //   var lengthOfTime = 365;
  //   lineChart.load(data);
  // });

  var x = 0;
  var todaysDate = new Date();
  var xAxis = ["x"];
  for ( x = lengthOfTime; x >= 0; x-- ) {
    xAxis.push(todaysDate.daysMoreLess(-x));
  }

  var lineChart = c3.generate({
    size: {
      height: 240
    },
    bindto: "#line-chart",
    data: {
      x: 'x',
      xFormat: '%Y-%m-%d %H:%M:%S',
      columns: [
        xAxis,
        ["data1", 30, 200, 100, 400, 150, 250, 300, 500, 600, 700, 800],
        ["data2", 50, 20, 10, 40, 15, 25, 48],
        ["data3", 40, 210, 120, 300, 0, 60, 2]
      ],
      colors: {
        data1: '#FC0271',
        data2: '#04ACE5',
        data3: '#7CCD32'
      }
    },
    grid: {
      y: {
        show: true
      }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%m/%d'
        }
      },
      y: {
        tick: {
          count: 5
        },
        show: false
      }
    },
    legend: {
      show: false
    }
  });

  var lineChart2 = c3.generate({
    size: {
      height: 240
    },
    bindto: "#line-chart-2",
    data: {
      x: 'x',
      xFormat: '%Y-%m-%d %H:%M:%S',
      columns: [
        xAxis,
        ["Safety", 30, 200, 100, 400, 150, 250]
      ],
      colors: {
        Safety: '#7CCD32'
      }
    },
    axis: {
      x: {
        type: 'timeseries',
        tick: {
          format: '%m/%d'
        }
      },
      y: {
        show: false
      }
    },
    legend: {
      show: false
    }
  });

// for toggling colors on chart legend
// $('.myButtonLink').click(function() {
//   $(this).toggleClass('active_class');
// });


  // function toggle(id) {
  //   lineChart.toggle(id);
  // }
  //
  // d3.select('#line-options-panel').insert('div', '#line-chart').attr('id', 'line-legend').selectAll('h4')
  //     .data(['data1', 'data2', 'data3'])
  //   .enter().append('h4')
  //     .attr('data-id', function (id) { return id; })
  //     .html(function (id) { return id; })
  //     .each(function (id) {
  //         d3.select(this).style('color', lineChart.color(id));
  //     })
  //     .on('mouseover', function (id) {
  //         lineChart.focus(id);
  //     })
  //     .on('mouseout', function (id) {
  //         lineChart.revert();
  //     })
  //     .on('click', function (id) {
  //         lineChart.toggle(id);
  //     });
  //
  // d3.select('#results-options').append('li', '#line-chart-2').attr('id', 'line-2-legend').selectAll('li')
  //   .data(['Safety'])
  //   .enter().append('li')
  //   .attr('data-id', function (id) {
  //     return id;
  //   })
  //   .html(function (id) {
  //     return id;
  //   })
  //   .each(function (id) {
  //     d3.select(this).style('color', lineChart2.color(id));
  //   })
  //   .on('mouseover', function (id) {
  //     lineChart2.focus(id);
  //   })
  //   .on('mouseout', function (id) {
  //     lineChart2.revert();
  //   })
  //   .on('click', function (id) {
  //     lineChart2.toggle(id);
  //     lineChart2.toggle(d3.select(this).style('color', 'black'));
  //   });
});
