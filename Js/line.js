$(function () {

    var ctx = $("#myChart");

    var data = {
        labels: ["June 1992", "Sep 1992", "June 1995", "May 2000", "Dec 2002", "May 2004", "Oct 2005", "Jan 2006", "Nov 2008", "Oct 2011",
            "July 2014", "July 2017"],
        datasets: [
            {
                label: "The House",
                data: [
                    165000,
                    180000,
                    260000,
                    243000,
                    275000,
                    275000,
                    275000,
                    470000,
                    580000,
                    560000,
                    835000,
                    1180000
                ],
                backgroundColor: "blue",
                borderColor: "lightblue",
                fill: false,
                lineTension: 0.4,
                pointRadius: 5
            }
        ]
    };

    var options = {
        title: {
            display: true,
            position: "top",
            text: "Property tree",
            fontSize : 18,
            fontColor: "#111"
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    // Return an empty string to draw the tick line but hide the tick label
                    // Return `null` or `undefined` to hide the tick line entirely
                    userCallback: function(value, index, values) {
                        // Convert the number to a string and splite the string every 3 charaters from the end
                        value = value.toString();
                        value = value.split(/(?=(?:...)*$)/);
            
                        // Convert the array to a string and format the output
                        value = value.join(',');
                        return '$' + value;
                    }
                }
            }]
        }
    };
    var chart = new Chart(ctx, {
        type: "line",
        data: data,
        options: options
    });
});