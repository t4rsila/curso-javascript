var notas = [7.5, 8.0, 6.0, 9.0];

console.log("notas: " + notas);
console.log("primeira nota: " + notas[0])
console.log("segunda nota: " + notas[1])
console.log("terceira nota: " + notas[2])
console.log("quarta nota: " + notas[3])

// percorrendo o vetor usando um loop
for(let i = 0; i< notas.lenght; i ++) {
    console.log("nota " + (i + 1) + ": " + notas[i]);
}

// usando forEach para percorrer o vetor
notas.forEach(obj => console.log("nota: " + obj));