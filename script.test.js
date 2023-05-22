const googleSearch = require("./script.js");



dbMock = [
    "dog.com",
    "cheesepuff.com",
    "disney.com",
    "dogpictures.com"
];

it("is searching google", () => {
    expect(googleSearch("test", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
});

it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch("com", dbMock).length).toEqual(3);
});