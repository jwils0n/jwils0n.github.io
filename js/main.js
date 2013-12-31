/* global google: false */
var core = (function () {

  var buildSkillsGraph = function () {
    google.load('visualization', '1', { packages:['corechart'] });
    google.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Skill',          'Efficiency'],
        ['Client JS',       9.5],
        ['Node.js',         7],
        ['HTML/CSS',        9.5],
        ['OOP PHP',         8.5],
        ['ActionScript 3',  6],
        ['C#/.NET',         5],
        ['MySQL',           7]
      ]),

      options = {
        // title: 'Test',
        legend: { position: 'none' }
      },

      chart = new google.visualization.BarChart(document.getElementById('skills-graph'));

      chart.draw(data, options);
    }
  };

  return {
    init: function () {
      buildSkillsGraph();
    }
  };
})();

// core.init();