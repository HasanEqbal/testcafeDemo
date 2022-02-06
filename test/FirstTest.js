import { Selector } from "testcafe";

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test("First Test", async t => {
    await t
        .typeText('#developer-name', 'TOM')
        .click('#macos')
        .click('#submit-button');
});