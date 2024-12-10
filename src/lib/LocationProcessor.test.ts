import {
  calculateLocationDifferences,
  formatStringIntoLists,
} from "./LocationProcessor";

describe("formatStringIntoLists", () => {
  it("should correctly format valid file content into two lists", () => {
    const fileContent = `1 2\n3 4\n5 6`;
    const result = formatStringIntoLists(fileContent);
    expect(result).toEqual({
      column1: [1, 3, 5],
      column2: [2, 4, 6],
    });
  });

  it("should throw an error if file content is empty", () => {
    const fileContent = "";
    expect(() => formatStringIntoLists(fileContent)).toThrow(
      "File content cannot be empty"
    );
  });

  it("should throw an error if a line contains non-numeric values", () => {
    const fileContent = `1 two\n3 4\n5 6`;
    expect(() => formatStringIntoLists(fileContent)).toThrow(
      "An error occurred while processing the file content"
    );
  });
});

describe("calculateLocationDifferences", () => {
  it("should correctly calculate the total distance for two arrays", () => {
    const locationIds1 = [3, 4, 2, 1, 3, 3];
    const locationIds2 = [4, 3, 5, 3, 9, 3];
    const result = calculateLocationDifferences(locationIds1, locationIds2);
    expect(result).toBe(11);
  });

  it("should throw an error if the arrays have different lengths", () => {
    const locationIds1 = [3, 1];
    const locationIds2 = [1, 5, 9];
    expect(() =>
      calculateLocationDifferences(locationIds1, locationIds2)
    ).toThrow("The list of locations must be equal in length");
  });

  it("should handle arrays with negative numbers", () => {
    const locationIds1 = [-1, -3, -5];
    const locationIds2 = [-2, -4, -6];
    const result = calculateLocationDifferences(locationIds1, locationIds2);
    expect(result).toBe(3);
  });

  it("should return 0 when both arrays are identical", () => {
    const locationIds1 = [1, 2, 3];
    const locationIds2 = [1, 2, 3];
    const result = calculateLocationDifferences(locationIds1, locationIds2);
    expect(result).toBe(0);
  });
});
