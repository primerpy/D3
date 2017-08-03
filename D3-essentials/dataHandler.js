var parseDate = d3.timeParse("%m/%d/%Y");


// TSV file
// d3.tsv("data/data.tsv")
//     .row(function(d){return {month:parseDate(d.month),
//                              price:Number(d.price.trim().slice(1))}; })
//     .get(function(error,data){
//         console.log(data);
//     })

// TEXT PSV file
// var psv = d3.dsvFormat("|");

// d3.text("data/data.txt")
//     .get(function(error, data){
//         var rows = psv.parse(data);
//         var newRows = [];

//         for (var p=0; p < rows.length; p++) {
//             newRows.push({month: parseDate(rows[p].month),
//                           price: Number(rows[p].price.trim().slice(1))});
//         };

//         console.log(newRows)
//     })

// JSON file
// d3.json("data/treeData.json").get(function(error,data){
//     console.log(data[0]);
//     console.log(data[0].children[0].children[1].name);
// });

// XML file
// d3.xml("data/data.xml").get(function(error,data){

//     //javascript method
//     var xmlLetter = data.documentElement.getElementsByTagName("letter");

//     //d3 method
//     var letterNodes = d3.select(data).selectAll("letter")._groups[0][0];
//     console.log(letterNodes);
// });

// Normal txt file
// d3.text("data/test.txt").get(function(error, data){

//     var myTabPositions = [];
//     var myNewLinePositions = [];

//     var tabVal = '\\b\t\\b';
//     var tabMod = 'g';
//     var tabRegExp = new RegExp(tabVal, tabMod);

//     var lineVal = '\\b\n\\b';
//     var lineMod = 'g';
//     var lineRegExp = new RegExp(lineVal, lineMod);

//     data.replace(tabRegExp, function(a, b){myTabPositions.push(b); return a;});
//     data.replace(lineRegExp, function(a, b){myNewLinePositions.push(b); return a;});

//     console.log(myTabPositions);
//     console.log(myNewLinePositions);

// })


// Parsing HTML
// d3.html("https://enable-cors.org").get(function(error, data){
//     var frag = data.querySelector("div");
//     console.log(frag);
// });

