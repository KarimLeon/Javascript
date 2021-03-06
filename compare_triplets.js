function compareTriplets(a, b) {
    let alicePoints = 0, bobPoints = 0
    for (let i = 0; i < a.length; i++) {
          if (a[i] > b[i]) alicePoints++; 
          if (b[i] > a[i]) bobPoints++
    }
    return `${alicePoints} ${bobPoints}`
}

/*
The task is to find their comparison points by comparing a[0] with b[0], a[1] with b[1], and a[2] with b[2].

If a[i] > b[i], then Alice is awarded 1 point.
If a[i] < b[i], then Bob is awarded 1 point.
If a[i] = b[i], then neither person receives a point.
Comparison points is the total points a person earned.

Given a and b, determine their respective comparison points.
*/
