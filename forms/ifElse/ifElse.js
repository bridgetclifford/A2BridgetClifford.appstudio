let name = prompt("Enter your first name.")

let state = prompt("Enter your state—using NE or FL.")

let temp = prompt("Enter the temperature—just the number in Fahrenheit.")

let messages = ["wear a warm coat but you won’t need a hat, scarf or gloves.", "wear a warm coat, hat, scarf and gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."] 

if (state == "NE" && temp >= 32 && temp <= 50) {
  console.log(`${name}, ${messages[0]}`)
}
else if (state == "NE" && temp < 32) {
  console.log(`${name}, ${messages[1]}`)
}
else if (state == "FL" && temp >= 32 && temp <= 50) {
  console.log(`${name}, ${messages[2]}`)
}
else if (state == "FL" && temp > 50 && temp <= 70) {
  console.log(`${name}, ${messages[3]}`)
}
