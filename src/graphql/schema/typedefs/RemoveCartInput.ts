import {   GraphQLInputObjectType,  GraphQLString } from "graphql";

 const RemoveCartInput = new GraphQLInputObjectType({
     name : "RemoveCartInput",
     description: "remove cart input",
     fields: {
        
        quantity: {
           type:GraphQLString,
           description:"quantity of the product added to cart"
       },
       productId:{
           type:GraphQLString,
           description:"id of the product added to cart"
       },
       userId:{
        type:GraphQLString,
        description:"id of the user who added product to cart"
       }
     }
 })

 export default RemoveCartInput