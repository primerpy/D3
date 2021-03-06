var dataArray = [5, 11, 18];
var colorArray = ["pink", "green", "blue"];

var dataDays = ["Mon", "Wed", "Fri"];

var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0,10]);
var rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0,3]);

var x = d3.scaleBand()
    .domain(dataDays)
    .range([0,170])
    .paddingInner(0.1176);

var xAxis = d3.axisBottom(x);


var svg = d3.select("body").append("svg")
    .attr("height", "100%")
    .attr("width", "100%");

var cat20 = d3.schemeCategory20;
console.log(cat20)

svg.selectAll("rect")
    .data(dataArray)
    .enter().append("rect")
    .attr("height", function(d, i){return d * 15;})
    .attr("width",50)
    .attr("fill", function(d, i){return rainbow(i);})
    .attr("x",function(d, i){return 70 * i;})
    .attr("y",function(d, i){return 300 - d * 15}); 

svg.append("g")
    .attr("class", "x axis hidden")
    .attr("transform", "translate(0,300)")
    .call(xAxis);

var newX = 200;

svg.selectAll("circle.first")
    .data(dataArray)
    .enter().append("circle")
    .attr("class", "first")
    .attr("fill", function(d,i){return rainbow2(i)})
    .attr("cx", function(d,i){newX+=(d*3) + i*20;return newX;})
    .attr("cy", "100")
    .attr("r", function(d,i){return d;})

var newX = 400;

svg.selectAll("circle.second")
    .data(dataArray)
    .enter().append("circle")
    .attr("class", "second")
    .attr("cx", function(d,i){newX+=(d*3) + i*20;return newX;})
    .attr("cy", "100")
    .attr("fill", function(d,i){return cat20[20-i*2];})
    .attr("r", function(d,i){return d;})

var newX = 600;

svg.selectAll("line")
    .data(dataArray)
    .enter().append("line")
    .attr("x1", newX)
    .attr("y1", function(d, i){return 8 + (i*20)})
    .attr("x2", function(d){return newX + d*15;})
    .attr("y2", function(d, i){return 8 + (i*20)})    

var TextArray = ["start", "middle", "end"]

svg.append("text").selectAll("tspan")
    .data(TextArray)
    .enter().append("tspan")
    .attr("x",newX)
    .attr("y",function(d, i){return 150 * i + 50;})
    .attr("fill","blue")
    .attr("stroke","grey")
    .attr("stroke-line",2)
    .attr("text-anchor","start")
    .attr("font-size", 30)
    .attr("dominant-baseline", "middle")
    .text(function(d,i){return d;})

svg.append("line")
    .attr("x1", newX)
    .attr("y1", 150)
    .attr("x2", newX)
    .attr("y2", 400)
