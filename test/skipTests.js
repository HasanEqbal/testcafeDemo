import { Selector } from "testcafe";

const developerName = Selector("#developer-name");
const osOption = Selector("#macos");
const submit = Selector("#submit-button");

fixture("First Fixture")
    .page("https://devexpress.github.io/testcafe/example/");

test.skip("First Test", async t => {
    await t
        .typeText(developerName, 'TAU')
        .click(osOption)
        .click(submit);
});

test("Second Test", async t => {
    await t
        .typeText(developerName, 'TAU')
        .click(osOption)
        .click(submit);
});