import React from 'react';
import { useQuery } from 'react-apollo';
import {getBooksOfParticularAuthor} from '../queries/query'

function Authordetails(props) {
const {loading , data} = useQuery(getBooksOfParticularAuthor,{
    variables : {
        id : props.aidprop
    }
})

let displaythings =  () => {
    let val ;
    
    if(loading ) {
        return val = <h3>LOading....</h3>
    }else {
        
        if(data){
            val = data.author.book.map(e =>  <li key = {e.id}>{e.name}</li>) 
            console.log('+++++++', data.author.book )
            return val ;
        }
        else {
            return ;
        }
             
    } 
    
}
    return (
        <div>
            <h2>SOME OTHER BOOKS FROM THIS AUTHOR</h2>
            {displaythings()}

        </div>
    );
}

export default Authordetails;