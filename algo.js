//VARIABLES ET AFFECTATION
/**
 * Exercice 12



// a == 3;
// b == 30;
// c == 18;
 */

// STRUCTURE CONDITIONNELLE ET STRUCTURE ALTERNATIVE
/* EXECICE11 */
// fonction exercice11(h,m,s: entier){
//   si(s==60)alors
//     s=0
//     m=l+1
//     si(m==60) alors
//       m=0
//       h=h+1
//       si(h==24) alors
//         h=0
//       fin si

//     fin si
//   fin si

//   ecrire ("l'heure suivante est " +h+m+s)

// }
/*exercice 13*/
// fonction exercice13(nbr:entier) {
// total:entier

//   si (nbr <= 10) alors
//     total = nbr * 0.10
//   sinon si (nbr <= 30) alors
//     total = (10 * 0.10) + ((nbr - 10) * 0.09)
//   sinon
//     total = (10 * 0.10) + ((30 - 10) * 0.09) + ((nbr - 30) * 0.08)
//   fin si

//   ecrire("il faut payer" + facture )
// }
/*STRUCTURE ITÉRATIVE*/
/* Exercice 9 (zouhaier)*/
// fonction exercice9(n) {
//   pour (i de 1 à n) faire
//     pour (j de 1 à i-1) faire
//       ecrire("*")
//     fin pour
//     ecrire("* \n")
//   fin pour

//   pour (i de n-1 à 1) faire
//     pour (j de 1 à i-1) faire
//       ecrire("*")
//     fin pour
//     ecrire("* \n")
//   fin pour
// }

/*TABLEAUX*/
//Ecercie 8 (Zouhaier)
// fonction exercie8(Mat) {
//   pour (i de 0 a 6) faire
//       pour(j de 0 a 12) faire 
//             si(i mod 2==0) alors
//                   si(j mod 4 ==0)alors
//                     Mat[i][j]="+"
//                   sinon
//                     Mat[i][j]="-"
//                   finsi  
//             sinon
//                   si(j mod 4 ==0)alors
//                     Mat[i][j]="|"
//                   sinon
//                     Mat[i][j]=" "
//                   finsi 
//             finsi
      
//       fin pour 
   
//   fin pour
//  pour (i de 0 a 6) faire
//       pour(j de 0 a 12) faire 
//          ecrire(Mat[i][j])
//       fin pour 
//   fin pour
// }


/*exercice Btonner*/
fonction batonner() {
  nbrBatonnets = 20
  joueurActuel = 1   
  a: entier
  tantque (nbrBatonnets > 0) faire
    ecrire("le nombre de btonnet est " + nbrBatonnets )

    si (joueurActuel == 1) alors
      ecrire("Joueur 1.")
    sinon
      ecrire("Joueur 2.")
    fin si

ecrire("combien de batonnet voulez vous retirer")
 lire(a)

    si (a >= 1 et a <= 3) alors
      si (a > nbrBatonnets) alors
        ecrire("nbr batonnet inssufisant.")
      sinon
        nbrBatonnets = nbrBatonnets - a
                   si (joueurActuel == 1) alors
                         joueurActuel = 2
                     sinon
                          joueurActuel = 1
                             fin si
      fin si
    sinon
      afficher("Saisie invalide. Veuillez choisir un nombre entre 1 et 3.")
    fin si
  fin tant que

  si (joueurActuel == 1) alors
    afficher("Le Joueur 2 a gagné !")
  sinon
    afficher("Le Joueur 1 a gagné !")
  fin si
}


