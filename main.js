// Line Analyzer

// Add Event Listener
document.getElementById("analyze").addEventListener("click", analyzeLine);

// Event Function
function analyzeLine() {
  // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
  let pt1x = Number(document.getElementById("pt1x").value);
  let pt1y = Number(document.getElementById("pt1y").value);
  let pt2x = Number(document.getElementById("pt2x").value);
  let pt2y = Number(document.getElementById("pt2y").value);

  // Call Analyze Functions and Display results

  document.getElementById("length").innerHTML = getLength(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );

  document.getElementById("slope").innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);

  document.getElementById("description").innerHTML = getDescription(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );

  document.getElementById("location-1").innerHTML = getPointLocation(
    pt1x,
    pt1y
  );

  document.getElementById("location-2").innerHTML = getPointLocation(
    pt2x,
    pt2y
  );
  document.getElementById("slope-point").innerHTML = getPointSlope(
    pt1x,
    pt1y,
    pt2x,
    pt2y
  );

  // document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

// Line Analyzer Functions (Write your solutions here. Uncomment above code when ready to test)

function getLength(x1, y1, x2, y2) {
  let answer = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  return answer.toFixed(2);
}

function getSlope(x1, y1, x2, y2) {
  let answer = (y2 - y1) / (x2 - x1);
  return answer;
}

function getDescription(x1, y1, x2, y2) {
  let answerX;
  let answerY;
  if (x1 > x2) {
    answerX = "The horizontal is decreasing";
  } else if (x1 < x2) {
    answerX = "The horizontal is increasing";
  }

  if (y1 > y2) {
    answerY = "the vertical is decreasing";
  } else if (y1 < y2) {
    answerY = "the vertical is increasing";
  }

  return `${answerX} and ${answerY}`;
}

function getPointLocation(x, y) {
  if (x == 0 && y == 0) {
    return "Point is at origin";
  } else if (x == 0 && y > 0) {
    return "Point is on the x-axis";
  } else if (x > 0 && y == 0) {
    return "Point is on the y-axis";
  } else if (x > 0 && y > 0) {
    return "Point is in Quadrant 1";
  } else if (x < 0 && y > 0) {
    return "Point is in Quadrant 2";
  } else if (x < 0 && y < 0) {
    return "Point is in Quadrant 3";
  } else if (x > 0 && y < 0) {
    return "Point is in Quadrant 4";
  }
}

function getPointSlope(x1, y1, x2, y2) {
  let m = (y2 - y1) / (x2 - x1);
  if (pt1x <= 0) {
    x1 = `x - ${Math.abs(x1)}`;
    return x1;
  } else if (pt1x >= 0) {
    x1 = `x + ${Math.abs(x1)}`;
    return x1;
  }

  if (pt1y <= 0) {
    y1 = `- ${Math.abs(y1)}`;
    return y1;
  } else if (pt1y >= 0) {
    y1 = `+ ${Math.abs(y1)}`;
    return y1;
  }

  return `${y1} = ${m}(${x1})`;
}

function getEquation(x1, y1, x2, y2) {
  let m = (y2 - y1) / (x2 - x1);

  if (pt1y <= 0) {
    y1 = `- ${Math.abs(y1)}`;
    return y1;
  } else if (pt1y >= 0) {
    y1 = `+ ${Math.abs(y1)}`;
    return y1;
  }

  return `y = ${m}x ${x1}`;
}
