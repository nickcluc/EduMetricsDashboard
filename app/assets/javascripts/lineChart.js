Date.prototype.daysMoreLess =
       Date.prototype.daysMoreLess ||
       function(days){
         days = days || 0;
         var ystrdy = new Date(this.setDate(this.getDate()+days));
         this.setDate(this.getDate() + -days);
         return ystrdy;
 };

var lengthOfTime = 364;
var x = 0;
var todaysDate = new Date();
var xAxis = [];
for ( x = lengthOfTime; x >= 0; x-- ) {
  xAxis.unshift(todaysDate.daysMoreLess(-x));
}

xAxis.unshift("x");
var lineChart = c3.generate({
  size: {
    height: 240
  },
  bindto: "#line-chart",
  data: {
    x: 'x',
    xFormat: '%Y-%m-%d %H:%M:%S',
    columns: [
      xAxis.slice(0,6),
      gon.resilience.slice(0,6),
      gon.timeManagement.slice(0,6),
      gon.safety.slice(0,6),
      gon.support.slice(0,6),
      gon.relationships.slice(0,6),
      gon.facilities.slice(0,6)
    ],
    names: {
      data1: 'Resilience',
      data2: 'Time Management',
      data3: 'Safety',
      data4: 'Support for Learning',
      data5: 'Relationships',
      data6: 'Facilities / Resources'
    },
    colors: {
      data1: '#00AAE5',
      data2: '#00ff00',
      data3: '#FE0076',
      data4: '#DEDEDE',
      data5: '#7CCE32',
      data6: '#282828'
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
    show: true
  },
  padding: {
    right: 10,
    left: 10
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

// Inserting A Legend Elsewhere
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
