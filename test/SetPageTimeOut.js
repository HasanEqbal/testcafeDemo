import { Selector } from "testcafe";

fixture("Set page timeout Fixture")
    .page("http://devexpress.github.io/testcafe/");

test("set page timeout Test", async t =>{
    await t
    .setPageLoadTimeout(1)
    .navigateTo('http://devexpress.github.io/testcafe/');
});