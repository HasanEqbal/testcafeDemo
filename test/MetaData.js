fixture.meta('version','1')("First Fixture")
    .page("http://devexpress.github.io/testcafe/");

test.meta('env','production')
.page("https://devexpress.github.io/testcafe/example/")
("First Test in Production", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});

test.meta('env','qa')
.page("https://devexpress.github.io/testcafe/example/")
("Second Test in QA", async t =>{
    await t
        .typeText("#developer-name","TAU")
        .click("#macos")
        .click("#submit-button");
});