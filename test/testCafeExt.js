fixture("My Fixture")
    .page("http://myurl");

    // take a screenshot of an element
    // see http://devexpress.github.io/testcafe/example/
    // you need to set the command-line option --screenshots <dir>
    const input = Selector('input#developer-name[type="text"]');
    await t
        .hover(input)
        .expect(input.hasAttribute("disabled")).notOk({timeout: 5000})
        .click(input)
        .typeText(input, "john doe", {replace: true})
        .takeElementScreenshot(input,
            // store the screenshot in the --screenshots dir
            "screenshot1.png", {
            includeMargins: true,
            includePaddings: true,
        });