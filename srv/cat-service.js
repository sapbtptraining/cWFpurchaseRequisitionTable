const cds = require('@sap/cds');
// const bodyParser = require('body-parser');

// app.use(bodyParser.json());

module.exports = cds.service.impl(async function(){
    // const db = await cds.connect.to ('db')
    // const {purchaseRequisition} = cds.entities('my.booshop');


    this.on('wfaction', async (req) => {

        // console.log("workflow============>"+req);
        // // console.log("workflow<============>"+JSON.stringify(req));
        // console.log("workflow<<<------------->>>"+req.body)
        // console.log("workflow<<<------------->>>"+req.data)
        // console.log("workflow<<<------------->>>"+req.data.productPrice)

        // try {
        //     // const ID = req.params[0];
        //     const tx = cds.tx(req);
        //     await tx.update(purchaseRequisition)
        //         // .with({ productPrice: { '+=': req.data.productPrice }, productCount: req.data.productCount })
        //         .with({ productPrice: req.data.productPrice, productCount: req.data.productCount })
        //         .where({ ID: { '=': 1 } })
        //         ;
        //     // debug('Boosted ID:', ID);
        //     return {};
        // } catch (err) {
        //     console.error(err);
        //     return {};
        // }        

        // await db.UPDATE (purchaseRequisition,1) .with ({ approvalStatus: 'Approved' })

    })

    this.on('wffunc', async (req) => {

        // await db.UPDATE (purchaseRequisition,1) .with ({ approvalStatus: 'Approved' })

    })    


    // this.on('UPDATE', "purchaseRequisition", async (req) => {
    // })

    // this.on('wffunc', async (req) =>{
    // });

    // this.on('wfaction', async (req) =>{
    // })

})