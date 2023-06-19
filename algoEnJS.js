function batonner() {
  let nbrBatonnets = 20;
  let joueurActuel = 1;
  let a;

  while (nbrBatonnets > 0) {
    console.log("Le nombre de bâtonnet est " + nbrBatonnets);

    if (joueurActuel === 1) {
      console.log("Joueur 1.");
    } else {
      console.log("Joueur 2.");
    }

    console.log("Combien de bâtonnet voulez-vous retirer ?");
    a = parseInt(prompt("Entrez un nombre :"));

    if (a >= 1 && a <= 3) {
      if (a > nbrBatonnets) {
        console.log("Nombre de bâtonnets insuffisant.");
      } else {
        nbrBatonnets -= a;
        if (joueurActuel === 1) {
          joueurActuel = 2;
        } else {
          joueurActuel = 1;
        }
      }
    } else {
      console.log("Saisie invalide. Veuillez choisir un nombre entre 1 et 3.");
    }
  }

  if (joueurActuel === 1) {
    console.log("Le Joueur 2 a gagné !");
  } else {
    console.log("Le Joueur 1 a gagné !");
  }
}

function exercice8() {
  let Mat = [];

  for (let i = 0; i < 7; i++) {
    Mat[i] = [];

    for (let j = 0; j < 13; j++) {
      if (i % 2 === 0) {
        if (j % 4 === 0) {
          Mat[i][j] = "+";
        } else {
          Mat[i][j] = "-";
        }
      } else {
        if (j % 4 === 0) {
          Mat[i][j] = "|";
        } else {
          Mat[i][j] = " ";
        }
      }
    }
  }

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 13; j++) {
      console.log(Mat[i][j]);
    }
  }
}

function exercice9(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      console.log("*");
    }
    console.log("* \n");
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i - 1; j++) {
      console.log("*");
    }
    console.log("* \n");
  }
}

function exercice11(h, m, s) {
  if (s === 60) {
    s = 0;
    m = m + 1;

    if (m === 60) {
      m = 0;
      h = h + 1;

      if (h === 24) {
        h = 0;
      }
    }
  }

  console.log("L'heure suivante est " + h + ":" + m + ":" + s);
}
exercice8();
