let scoreArray = [];

window.onload = function () {
  //Lade DOM zuerst
  // Execute a function when the user releases a key on the keyboard
  document.querySelector("#Neu").addEventListener("keyup", function (event) {
    // "Enter" key on the keyboard
    if (event.code === "Enter") {
      // Trigger the button element with a click
      document.getElementById("button").click();
    }
  });
  const d = new Date(); //In den folgenden Zeilen wird ein vollständiges Datum erzeugt
  let day = d.getDate();
  document.querySelector("#day").innerHTML = day + ". ";
  const month = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];
  let monat = month[d.getMonth()];
  document.querySelector("#month").innerHTML = monat + " ";
  let year = d.getFullYear();
  document.querySelector("#year").innerHTML = year;
};

function addToDo() {
  //Wenn der Button gedrückt wird...
  let y = document.querySelector("#Neu").value; //Setze y gleich dem eingegebenen Wert
  if (y.length > 0) {
    //Falls der eingegebene Wert nicht leer ist...
    var todo = document.createElement("li"); //Erzeuge eine Liste
    todo.innerHTML = //Erzeuge eine Checkbox in der Liste mit den folgenden Eigenschaften
      "<input type='checkbox' class='checkbox' onchange='check(this), hider()' >";

    var textnode = document.createTextNode(y); //Erzeuge einen Text mit y als Inhalt
    todo.appendChild(textnode); //Füge den Text an die Liste an
    document.getElementById("ToDo").appendChild(todo); //Füge das Listenelement zum nächsten Bereich hinzu

    scoreArray.push("todo"); //Erhöhe die Anzahl der ToDos
    console.log(scoreArray);
  }
}

function check(element) {
  //Wenn das Element abgehakt wird...
  if (document.getElementById("ToDo").contains(element)) {
    //Prüfe in welchem Bereich das Element liegt
    var done = document.createElement("li"); //Erzeuge eine Liste
    done.appendChild(element.parentNode); //und hänge an diese Liste das Element an
    document.getElementById("Done").appendChild(done); //Füge das Listenelement zum nächsten Bereich hinzu
    document.querySelectorAll(".checkbox").forEach((el) => {
      //Setze alle Checkboxen zurück
      el.checked = false;
    });
    scoreArray.pop(); //Vermindere die Anzahl der ToDos
    console.log(scoreArray);
  } else if (document.getElementById("Done").contains(element)) {
    //Prüfe in welchem Bereich das Element liegt
    var toDelete = document.createElement("li"); //Erzeuge eine Liste
    toDelete.appendChild(element.parentNode.parentNode); //und hänge an diese Liste das Element an
    document.getElementById("garbage").appendChild(toDelete); //Füge das Listenelement zum nächsten Bereich hinzu
    document.querySelectorAll(".checkbox").forEach((el) => {
      //Setze alle Checkboxen zurück
      el.checked = false;
    });
  } else if (document.getElementById("garbage").contains(element)) {
    //Prüfe in welchem Bereich das Element liegt
    element.parentNode.parentNode.parentNode.remove(); //Entferne das Element aus dem letzten Bereich
  }
}

function hider() {
  let score = 0; //Setze den Score auf 0
  for (let i = 0; i < scoreArray.length; i++) {
    //Gehe durch den ScoreArray
    score += 1; //und setze für jeden Eintrag den Score hoch
  }
  if (score !== 0) {
    //Zeige celebration text nur, falls keine Todos mehr
    document.querySelector(".celebration").style.visibility = "hidden";
    document.querySelector("#scoreDiv").style.visibility = "visible";
    document.querySelector("#scoreDiv").style.position = "relative";
    document.getElementById("score").innerHTML = score; //Zeige den Score auf der Website
  } else {
    document.querySelector(".celebration").style.visibility = "visible";
    document.querySelector("#scoreDiv").style.visibility = "hidden";
    document.querySelector("#scoreDiv").style.position = "absolute";
  }
}
