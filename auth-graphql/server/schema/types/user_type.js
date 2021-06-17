const graphql = require('graphql')
const {GraphQLID} = require("graphql");
const {GraphQLString} = require("graphql");
const {GraphQLObjectType} = require("graphql");

const UserType = new GraphQLObjectType({
  name:'UserType',
  fields:{
    id:{type:GraphQLID},
    email:{type:GraphQLString}
  }
})
module.exports = UserType
