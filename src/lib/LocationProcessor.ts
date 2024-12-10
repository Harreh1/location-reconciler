/**
 * Format a string into two lists of numbers. 
 * The string should contain two columns of numbers separated by a space.
 * @param fileContent The content of the file to be formatted
 */
export const formatStringIntoLists = (fileContent: string) => {
    if (!fileContent || fileContent.trim() === '') {
        throw new Error('File content cannot be empty')
    }

    try {
        const lines = fileContent.trim().split('\n');
        const column1: number[] = [];
        const column2: number[] = [];

        lines.forEach(line => {
            const lineTrimmed = line.trim(); 
            const lineSplitIntoNums = lineTrimmed.split(/\s+/); // Split by one or more spaces

            if (!lineSplitIntoNums[0] || !lineSplitIntoNums[1]) {
                throw new Error('Lists must contain two columns of numbers')
            }

            if (isNaN(Number(lineSplitIntoNums[0])) || isNaN(Number(lineSplitIntoNums[1]))) {
                throw new Error('Lists must contain only numbers')
            }

            column1.push(Number(lineSplitIntoNums[0]));
            column2.push(Number(lineSplitIntoNums[1]));
        });

        return { column1, column2 };
    } catch (error) {
        console.log(error);
        throw new Error('An error occurred while processing the file content');
    }
}

/**
 * Calculate the total distance between two lists of locations
 * Will first sort the lists from smallest to largest then compare the values at each index
 * @param locationIds1 List of locations you want to compare with
 * @param locationIds2 List of locations to be used for comparison
 */
export const calculateLocationDifferences = (locationIds1: number[], locationIds2: number[]) => {
    if (locationIds1.length !== locationIds2.length) {
        throw new Error('The list of locations must be equal in length')
    }
    // Order both the location arrays from smallest to largest
    locationIds1.sort((a, b) => a - b)
    locationIds2.sort((a, b) => a - b)

    let totalDistance = 0

    console.log(locationIds1, locationIds2)
    for (let i = 0; i < locationIds1.length; i++) {
        console.log(Math.abs(locationIds1[i] - locationIds2[i]))
        totalDistance += Math.abs(locationIds1[i] - locationIds2[i]) 
    }

    return totalDistance
}