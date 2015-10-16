//function highjack(a, b) {
  //console.log("hijacking");
  //console.log(a + b);
  //console.log(arguments);
//}

//var anonymous = function(){
  //console.log("anonymous");
//};

// jQuery("body").load(function(e){
  var elements = {
    radiusString: jQuery("#radius-string"),
    increaseButton: jQuery("#increase-button"),
    decreaseButton: jQuery("#decrease-button"),
    drawCircleButton: jQuery("#draw-circle-button"),
    mainSVG: jQuery("#main-svg"),
    circleContainer: jQuery("#circle-container"),
    svgTextArea: jQuery("#svg-text-area"),
    exportButton: jQuery("#export-button"),
  };

  var step = 10;
  var width = 400;
  var center = Math.floor(width / 2);
  var radius = 100;
  var color = "#000000";
  var svgNS = "http://www.w3.org/2000/svg";

  function getRandomColor(){
    var output = "#",
        i = 0;
    var pad = function(stringIn){
      return Array(2 - stringIn.length + 1).join('0') + stringIn;
    };
    while(i++ < 3){
      output += pad(Math.floor(Math.random() * 256).toString(16));
    }
    return output;
  }

  function setRadiusString(){
    elements.radiusString.html(radius.toString());
  }

  setRadiusString();

  function increaseRadius(){
    radius = radius + step;
    if (2 * radius > width){
      radius = center;
    }
    setRadiusString();
  }

  function decreaseRadius(){
    radius = radius - step;
    if (radius < 0){
      radius = step;
    }
    setRadiusString();
  }

  function drawCircle(){
    elements.mainSVG.empty();
    var nativeSVGElement = elements.mainSVG[0];
    var circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", center);
    circle.setAttribute("cy", center);
    circle.setAttribute("r", radius);
    circle.style.stroke = "#000000";
    circle.style.strokeWidth = "4px";
    circle.style.fill = getRandomColor();
    nativeSVGElement.appendChild(circle);
  }

  elements.drawCircleButton.click(drawCircle);
  elements.increaseButton.click(increaseRadius);
  elements.decreaseButton.click(decreaseRadius);

  function exportSVG(){
    elements.svgTextArea.val(elements.circleContainer.html());
  }

  elements.exportButton.click(exportSVG);

// });
