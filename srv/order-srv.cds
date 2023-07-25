using { flex } from '../db/schema';

service OrderService {
    entity Orders as projection on flex.Orders;
    entity Items  as projection on flex.Items;


}
