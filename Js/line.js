$(function () {

    var price = [];
    var date = [];
    $.getJSON("propertytree.json", function (data) {
        $.each(data.PropertyTree, function (key, value) {
            if (value.imageMethod == "bank") {
                price.unshift(value.price);
                date.unshift(value.dtsold);
            }
        });
    });

    var ctx = $("#myChart");

    var data = {
        labels: date,
        datasets: [
            {
                label: "The House",
                data: price,
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
            fontSize: 18,
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
                    userCallback: function (value, index, values) {
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