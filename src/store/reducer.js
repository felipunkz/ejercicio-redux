const initialState = {
	persons: []
}

const reducer = (state = initialState, action) => {
	switch(action.type){
		case 'ADDPERSON':
			const currentPersons = state.persons;
			const newPerson = {
				id: Math.random(),
            	name: 'Mike',
            	age: Math.floor( Math.random() * 40 )
			}
			return {
				persons: currentPersons.concat(newPerson)			
			}
	
		case 'REMOVEPERSON':
			const elementoActual = action.value;
			// const currentPersons = state.persons;
			const filteredPersons = state.persons.filter((person) => {
				return elementoActual !== person.id

			})
			return {
				persons: filteredPersons
			}
		default: 
			return state
	}
}

export default reducer;