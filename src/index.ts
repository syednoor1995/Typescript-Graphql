import { ApolloServer } from 'apollo-server';
import schema from '@src/graphql/schema/schema'
// import dotenv from "dotenv-safe"
import { performAstCodegen } from './codegen';
import prisma from "@src/prisma/client"
import { IApolloServerContext} from "@src/interfaces/IApolloServerContext"
// dotenv.config()

const startServer = () => {
    performAstCodegen()

    const context: IApolloServerContext = {
        prisma
    }
    const server = new ApolloServer({
        schema,
        context
    })
    server.listen().then(({url})=>{
        console.log(`Ready at ${url}graphql`)
    })
    .catch(err=> console.log(err))
    
}


startServer()



//cd src && mkdir graphql && cd graphql && mkdir generated && mkdir schema && cd schema && mkdir resolvers && mkdir typedefs && cd resolvers && mkdir query && mkdir mutation && cd ../../../..
// cd src && mkdir data && cd data && mkdir types && cd ../..