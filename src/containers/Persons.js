import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    state = {
        persons: []
    }

    // personAddedHandler = () => {
    //     const newPerson = {
    //         id: Math.random(), // not really unique but good enough here!
    //         name: 'Mike',
    //         age: Math.floor( Math.random() * 40 )
    //     }
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.concat(newPerson)}
    //     } );
    // }

    // personDeletedHandler = (personId) => {
    //     this.setState( ( prevState ) => {
    //         return { persons: prevState.persons.filter(person => person.id !== personId)}
    //     } );
    // }

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.agregaPersona} />
                {this.props.personas.map(persona => (
                    <Person 
                        key={persona.id}
                        name={persona.name} 
                        age={persona.age} 
                        clicked={() => this.props.eliminaPersona(persona.id)}/>
                ))}
            </div>
        );
    }
}

const mapStoreToProps = (state) => {
    return {
        personas: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        agregaPersona: () => dispatch(
            {
                type: "ADDPERSON"
            }
        ),
        eliminaPersona: (id) => dispatch(
            {
                type: "REMOVEPERSON",
                value: id
            }
        )
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Persons);