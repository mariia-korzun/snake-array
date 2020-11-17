const snakeArray = (snakeStart) => {
    let rows = 6
    let columns = 7
    let matrix = []
    while (matrix.length < rows) {
        matrix.push([])
    }
    let vectorsArray = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    let indexOfVector = 0
    let vector = vectorsArray[indexOfVector]
    let cx = 0
    let cy = 0

    while (matrix[cx][cy] === undefined) {
        matrix[cx][cy] = snakeStart++
        let cxNew = cx + vector[0]
        let cyNew = cy + vector[1]
        if (cxNew === rows || cyNew === columns || cxNew === -1 || cyNew === -1 || matrix[cxNew][cyNew] !== undefined ) {
            indexOfVector = (indexOfVector + 1) % vectorsArray.length
            vector = vectorsArray[indexOfVector]
        }
        cx = cx + vector[0]
        cy = cy + vector[1]

    }
    return matrix;
}
module.exports = snakeArray;
