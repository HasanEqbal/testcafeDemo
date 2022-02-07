fixture("First Fixture")
    .page("http://devexpress.github.io/testcafe/")
    .beforeEach(async t =>{
        await t
            .setTestSpeed(1)
            .setPageLoadTimeout(0);
    });

test.meta({
    ID: '1',
    SEVERITY: 'blocker',
    STORY: '12341',
    TEST_RUN: 'test run id or identifier'
})
.page("https://devexpress.github.io/testcafe/example/")
("First Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button")
        .takeScreenshot();
});

test.meta({
    ID: '2',
    SEVERITY: 'blocker',
    STORY: '12342',
    TEST_RUN: 'test run id or identifier'
})
.page("https://devexpress.github.io/testcafe/example/")
("Second Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button")
        .takeScreenshot();
});

test.meta({
    ID: '3',
    SEVERITY: 'blocker',
    STORY: '12343',
    TEST_RUN: 'test run id or identifier'
})
.page("https://devexpress.github.io/testcafe/example/")
("Third Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .takeElementScreenshot("#submit-button")
        .click("#submit-button")
        .takeScreenshot();
});

test.meta({
    ID: '4',
    SEVERITY: 'blocker',
    STORY: '12344',
    TEST_RUN: 'test run id or identifier'
}).page("https://devexpress.github.io/testcafe/example/")
("Fourth Test", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .takeElementScreenshot("#submit-button")
        .click("#submit-button")
        .takeScreenshot();
});