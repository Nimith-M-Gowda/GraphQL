import React,{useState} from 'react';
import {graphql} from 'react-apollo'
import { useQuery } from 'react-apollo';
import {search_color,search_specie} from '../queries/query'

function Filteranimals(props) {

    const [color,setcolor] = useState('');
    const [specie,setspecie] = useState('');

    const data_search_color = useQuery(search_color,{
        variables : {
            search_color : color,
        }
    });
    const data_search_specie = useQuery(search_specie,{
        variables : {
            search_specie: specie,
        }
    });
    
    let OnsubmitSpecie = (e) => {
        e.preventDefault();
       
        console.log('data_search_species',data_search_specie);
    }


    let OnsubmitColor = (e) => {
        e.preventDefault();
        
        console.log('data_search_colors',data_search_color)
    }
    return (
        <>
            <h1>filteranimals</h1>
            
                <form onSubmit = {(e) => OnsubmitSpecie(e)}>
            <input type = 'text'  onChange = {(e) => setspecie(e.target.value)}/>
            <input type = "submit" value = "specie search"/>
                </form>
{/*             

            <form onSubmit = {(e) => OnsubmitColor(e)}>
            <input type = 'text'  onChange = {(e) => setcolor(e.target.value)}/>
            <input type = "sumbit" value = "color search"/>
            </form> */}
        </>

    );
}

export default Filteranimals;   