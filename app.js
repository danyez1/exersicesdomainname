console.log("Hello World");
let pronoum = ['the', 'our',]
let adj = ['great', 'big', 'small', 'stronger']
let noum = ['player', 'singer', 'panther',]
for (let pindex = 0; pindex < 2; pindex++) {
    for (let aindex = 0; aindex < 2; aindex++) {
        for (let nindex = 0; nindex < 2; nindex++) {
            console.log(pronoum[pindex] + adj[aindex] + noum[nindex] + '.com')
        }
    }
}
