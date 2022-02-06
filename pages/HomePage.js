import { Selector,t } from "testcafe";

class HomePage{
    constructor(){
        this.fobs=Selector(".nav-menu")
    }

    async selectRandomFOB(params) {
        this.fobs.filter((node, idx) => {
           await t.click(node)
        })
    }

}

export default new HomePage();