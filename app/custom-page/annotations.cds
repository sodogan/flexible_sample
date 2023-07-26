using OrderService as service from '../../srv/order-srv';

annotate service.Orders with @(
    UI.SelectionFields : [
        ID,
        orderId,
        customer_ID,
        
    ]
);
annotate service.Orders with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : ID,
            Label : '{i18n>id}',
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : customer_ID,
            Label : '{i18n>customerId}',
            ![@UI.Importance] : #High,
        },
        {
            $Type : 'UI.DataField',
            Value : description,
            Label : '{i18n>Description}',
            ![@UI.Importance] : #Medium,
        },
    ]
);
