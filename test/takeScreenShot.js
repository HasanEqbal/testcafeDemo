

fixture("Demo fro taking screenshot")
.page("https://devexpress.github.io/testcafe/example/");

test("Test for taking the screenshot", async t => {
    await t
        .typeText('#developer-name', 'Peter Parker')
        .click('#tried-test-cafe')
        .typeText('#comments', 'I think TestCafe is awesome!')
        .takeElementScreenshot('#comments')
        .click('#submit-button')
        .takeScreenshot();
});