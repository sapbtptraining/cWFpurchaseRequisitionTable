using my.bookshop as my from '../db/data-model';

service CatalogService
{
    entity Books as
        projection on my.Books;

    entity purchaseRequisition as
        projection on my.purchaseRequisition;

    // function wffunc() returns String;

    // action wfaction();

    // action submitOrder ( book: Books:ID, quantity: Integer ) returns { stock: Integer };
}
