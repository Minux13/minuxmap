
function hoverArea(e){
    tooltip = document.getElementById('mx-tooltip');
    var codeCountry = e.toElement.id;
    tooltip.innerHTML = mxCountries[ codeCountry ].translations.spa.common

    var x = e.pageX - ( tooltip.offsetWidth/2 ); // e.pageX clientX 
    var y = e.pageY - ( tooltip.offsetHeight ) - 15;  

    tooltip.style.top = y + 'px';
    tooltip.style.left = x +'px'; 
}

var countries=document.getElementsByClassName("europe");

for(c = 0; c< countries.length; c++){
    countries[c].addEventListener("mousemove", hoverArea);
}


function zoom(evt){
	a = evt
    e = evt.target;
    /*var dim = e.getboundingclientrect();
    var x = evt.clientx - dim.left;
    var y = evt.clienty - dim.top;
    console.log("x: "+x+" y:"+y);*/
    var dim = e.getBBox();
    var widthZoom = dim.width + 500;
    var heightZoom = dim.height + 350;
    var x = dim.x + ( widthZoom /2);
    var y = dim.y + ( heightZoom /2) ;

    console.log( dim.height + "x: "+x+" y:"+y);
    var totalWidht = 9940;
    var totalHeight = 8000;
	
    var scale = totalHeight/(dim.height + 250);

    document.getElementById("outlines").style.transformOrigin = x+"px "+ y +"px"
    document.getElementById("outlines").style.transform = "scale("+scale+")";

console.log(scale)
    //document.getElementById('svg2').style.scale= "red";
//translate(80.92891141182304,33.60672874195399) scale(0.8184454054741791)
}
//document.getElementById( "outlines" ).addEventListener("click", zoom);




var svg = document.getElementById("svg2")
var pt = svg.createSVGPoint();  // Created once for document

function alert_coords(evt) {
    pt.x = evt.clientX;
    pt.y = evt.clientY;

    // The cursor point, translated into svg coordinates
    var cursorpt =  pt.matrixTransform(svg.getScreenCTM().inverse());
    
}




//Zoom by Whell
var scaleWheel=1;
function zoomWheel(evt){
    var e = evt.target;
    aa = evt
    //var dim = e.getBBox();
    var x = e.x //+ ( widthZoom /2);
    var y = e.y //+ ( heightZoom /2) ;

    
    pt.x = evt.clientX;
    pt.y = evt.clientY;
    // The cursor point, translated into svg coordinates
    var cursorpt =  pt.matrixTransform(svg.getScreenCTM().inverse());
    //console.log("(" + cursorpt.x + ", " + cursorpt.y + ")");
    var x = Math.round(cursorpt.x / 50) * 50;
    var y = Math.round(cursorpt.y / 50) * 50;
    

    if(evt.deltaY < 0){
        scaleWheel = scaleWheel + 0.1;  //totalHeight/(dim.height + 250);
    }	
    if(evt.deltaY > 0){
        scaleWheel = scaleWheel - 0.1; //totalHeight/(dim.height + 250);
    }	    
    if(scaleWheel<1){scaleWheel=1;}

    //document.getElementById("outlines").style.transformOrigin =  x +"px "+ y +"px"
    document.getElementById("outlines").style.transform = "scale("+scaleWheel+") translate("+x+"px "+y+"px)";
    console.log("scale("+scaleWheel+") translate("+x+"px "+y+"px)");
}
document.getElementById("svg2").addEventListener("wheel", zoomWheel);





/*
var timer;
function dragMap(e){
    document.getElementsByClassName('europe').addEventListener("mousemove", function(eventForDrag){
	  aa= eventForDrag;
        var x = eventForDrag.target.getBBox().x; 
        var y = eventForDrag.target.getBBox().y;  
	console.log(x,y);
        document.getElementById("outlines").style.transformOrigin = x+"px "+ y +"px"
    });
}
function noDragMap(e){
}


document.getElementById("svg2").addEventListener('mousedown', dragMap);
document.getElementById("svg2").addEventListener('mouseup', noDragMap);*/



function dragg(e){
    //console.log(e.target.getBBox());
}

/*
document.getElementById('outlines').addEventListener("mousemove", dragg)



 .append("svg")
 .attr("width", "100%")
 .attr("height", "100%")
 .call(d3.zoom().on("zoom", function () {
    svg.attr("transform", d3.event.transform)
 }))
 .append("g")

document.getElementById('outlines').call(d3.zoom().on("zoom", zoomed));


var svg = d3.select("#svg2");
function zoomed(){
   svg.attr("transform", d3.event.transform);
   console.log("aaa");	
}
svg.call(d3.zoom().scaleExtent([1, 2]).on("zoom", zoomed));
*/

