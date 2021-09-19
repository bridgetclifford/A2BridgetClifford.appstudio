//prompts for user to enter name, state, and temperature
let name2 = prompt("Please enter your first name.")

let state2 = prompt("Please enter your state—using NE or FL.")

let temp2 = prompt("Please enter the temperature—just the number in Fahrenheit.")

//array for all the messages
let messages2 = ["wear a warm coat but you won’t need a hat, scarf or gloves.", "wear a warm coat, hat, scarf and gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."] 

//switch statement based on the state and temperature
switch(true) {
  case state2 == "NE" && temp2 >= 32 && temp2 <= 50:
    console.log(`${name2}, ${messages2[0]}`)
    break
  case state2 == "NE" && temp2 < 32:
    console.log(`${name2}, ${messages2[1]}`)
    break
  case state2 == "FL" && temp2 >= 32 && temp2 <= 50:
    console.log(`${name2}, ${messages2[2]}`)
    break
  case state2 == "FL" && temp2 > 50 && temp2 <= 70:
    console.log(`${name2}, ${messages2[3]}`)
    break
}