function getSquareOfTheWall(wallMeasurements) {

    return `${(wallMeasurements.height1 * wallMeasurements.width1) + (wallMeasurements.height2 * wallMeasurements.width2) + (wallMeasurements.height3 * wallMeasurements.width3) + (wallMeasurements.height4 * wallMeasurements.width4) - (wallMeasurements.doorH * wallMeasurements.doorW) - (wallMeasurements.windowH * wallMeasurements.windowW)} sq.m`;

}