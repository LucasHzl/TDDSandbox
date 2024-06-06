module.exports = { perimeter, faceArea, cubeArea, cubeVolume };


const sLength = 3;

function perimeter(sLength) {
    const cubePerimeter = (sLength * 4) * 6;
    return cubePerimeter;
}

function faceArea(sLength) {
    const faceArea = (sLength * sLength);
    return faceArea;
}

function cubeArea(sLength) {
    const cubeArea = (sLength * sLength) * 6;
    return cubeArea;
}

function cubeVolume(sLength) {
    const cubeVolume = sLength * sLength * sLength;
    return cubeVolume;
}