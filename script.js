'use strict;'

console.log(d3);

d3.select("p#target").text("hello world!")


function render(data) {
    console.log(data);
    var bars = d3.select("#chart").selectAll("div.h-bar").data(data);
    bars.enter().append("div")
        .attr("class", "h-bar")
        .style("width", function (d) {
            return (d.population * .00001) + "px";

        })
        .append("span")
        .text(function (d) {
            return d.county;
        });
}

function load() {
    console.log('button clicked!')
    d3.json("caCounties.json", function (error, json) {
        render(json);
    })
}