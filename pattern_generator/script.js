
  function generatePattern() {
      let n = parseInt(document.getElementById("numInput").value);
      let patternType = document.getElementById("patternType").value;
      let pattern = "";
      if (patternType === "triangle") {
        for (let i = 1; i <= n; i++){
          for(let j = 1; j <= i; j++){
            pattern += "*";
        }
        pattern += "\n";
      }
    }
    else if (patternType === "square"){
      for (let i = 1; i <= n; i++){
        for (let j=1; j <=n; j++){
          pattern += "*";
        }
        pattern += "\n";
      }
    }
    else if (patternType === "reverse"){
      for (let i = n; i >= 1; i--){
        for (let j = 1; j <=i; j++){
          pattern += "*";
        }
        pattern += "\n";
      }
    }
    else if (patternType === "hollowSquare") {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    pattern += "\n";
  }
}
else if (patternType === "numberTriangle") {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (patternType === "pyramid") {
  for (let i = 1; i <= n; i++) {
    // Add spaces for left side
    for (let space = 1; space <= n - i; space++) {
      pattern += " ";
    }

    // Add stars with space
    for (let j = 1; j <= i; j++) {
      pattern += "* ";
    }

    pattern += "\n";
  }
}
else if (patternType === "rightAlignedNumber") {
  for (let i = 1; i <= n; i++) {
    // Add leading spaces
    for (let space = 1; space <= n - i; space++) {
      pattern += " ";
    }
    // Add numbers with space
    for (let j = 1; j <= i; j++) {
      pattern += j + " ";
    }
    pattern += "\n";
  }
}
else if (patternType === "pascals") {
  for (let i = 0; i < n; i++) {
    // Add spaces to align
    for (let space = 1; space <= n - i; space++) {
      pattern += "  ";
    }

    let number = 1;

    for (let j = 0; j <= i; j++) {
      pattern += number + "   ";
      number = number * (i - j) / (j + 1);
    }

    pattern += "\n";
  }
}
else if (patternType === "floyds") {
  let count = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += count + " ";
      count++;
    }
    pattern += "\n";
  }
}
else if (patternType === "checkerboard") {
  for (let i = 1; i <= n; i++) {
    // If row is even, start with a space
    if (i % 2 === 0) {
      pattern += " ";
    }

    for (let j = 1; j <= n; j++) {
      pattern += "* ";
    }

    pattern += "\n";
  }
}
      document.getElementById("outputArea").textContent = pattern;
    } 
  