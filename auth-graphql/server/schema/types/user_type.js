const graphql = require('graphql')
const {GraphQLString} = require("graphql");
const {GraphQLObjectType} = require("graphql");

const UserType = new GraphQLObjectType({
  name:'UserType',
  fields:{
    email:{type:GraphQLString}
  }
})
module.exports = UserType
