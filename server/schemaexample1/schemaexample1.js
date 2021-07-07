const {GraphQLObjectType , GraphQLString ,GraphQLID,GraphQLSchema,GraphQLList,GraphQLNonNull,GraphQLInt} = require ('graphql');
const AnimalModel = require('../modelsexample1/animal');
const async = require('async');

const Animaltype = new GraphQLObjectType({
    name : 'Animal',
    fields : () => ({
        id : {type : GraphQLID},
        name : {type : GraphQLString},
        species : {type : GraphQLString}, 
        distance : {type : GraphQLString}, 
        MicrochipID : {type : GraphQLString}, 
        color : {type : GraphQLString}, 
    })
})

const RootQuery = new GraphQLObjectType ({
    name : 'RootQueryType',
    fields : {

        search_specie : {
                        type : GraphQLList(Animaltype),
                        args : {search_specie : {type : GraphQLString}},
                        resolve (parent,args){
                                            let value = AnimalModel.find({
                                            species : args.search_specie
                                                                        })
                                            return value
                                            }

                        },
                // async.waterfall([
                //         function(callback){
                //             let val = AnimalModel.find(
                //                 {species : args.search_species} 
                //                 );
                //                 // console.log(val)
                //                 return val
                //             // callback(null ,val)
                //         },

                        // function(val ,callback){
                        //     // console.log(val)
                        //     let newval = AnimalModel.find(
                        //         {color : args.search_color}
                        //     );
                        //     // console.log(newval)
                        //     let newval2 = [...val, ...newval];
                        //     // console.log(newval2)
                        //     const lookup = newval2.reduce((a, e) => {
                        //         a[e.id] = ++a[e.id] || 0;
                        //         return a;
                        //       }, {});
                              
                        //       let finalval = newval2.filter(e => lookup[e.id]);
                        //     //   console.log(finalval)
                        //     return finalval;
                        // },

            //     ],function(err,res){
            //         if(!err){
            //             console.log(res)
            //             // return res ; 
            //         }
            //         else {
            //             return 'ERROR'
            //         }
            //     })   
            
            // }
    search_color : {
        type : GraphQLList(Animaltype),
        args : {search_color : {type : GraphQLString}},
        resolve (parent,args){
            return  AnimalModel.find({
                color : args.search_color
            })
            
    } 
},

        animal : {
            type : Animaltype,
            args : {id : {type : GraphQLID}},
            resolve(parent , args){
                return AnimalModel.findById(args.id);
            }
        },

        allanimals : {
            type : new GraphQLList(Animaltype),
            resolve (parent , args){
                return AnimalModel.find({})
            }
        }
    }

})


let Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields : {
       

        addanimals : {
            type : Animaltype,
            args : {
                name : {type : new GraphQLNonNull(GraphQLString)},
                species : {type : new GraphQLNonNull(GraphQLString)},
                distance : {type : new GraphQLNonNull( GraphQLString)},
                MicrochipID : {type : new GraphQLNonNull( GraphQLString)},
                color : {type : new GraphQLNonNull( GraphQLString)},
            },
            resolve (parent ,args) {
                let animal = new AnimalModel({
                    name : args.name,
                    species : args.species,
                    distance : args.distance,
                    MicrochipID : args.MicrochipID,
                    color : args.color,
                })
                return animal.save ();
            }
        }
                
    },
    
})




module.exports = new GraphQLSchema({
    query : RootQuery ,
    mutation : Mutation 
})