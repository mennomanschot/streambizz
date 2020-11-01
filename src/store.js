const initialState = {
  header: {
		rows:[
			{
				columns:[
					{
						fieldId: "cc4cb134-fda0-44d8-8e92-e42ebbceb415"
					},
					{
						fieldId: "228b905f-4a43-4a40-b829-0c6a04ad4782"
					}
				]
			}
		]
  },
  schema:{
		fields:[
			{
				_id: "cc4cb134-fda0-44d8-8e92-e42ebbceb415",
				label: "Client Name",
				name:"name",
				type: "Text",
				maxLength: 10
			},
			{
				_id: "228b905f-4a43-4a40-b829-0c6a04ad4782",
				label:"Client Age",
				name: "age",
				type: "number"
			}
		]
	}

}

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_AGE_FIELD": 
      const ageFieldAddedArray = state.header.rows[0].columns.concat({
        fieldId: "228b905f-4a43-4a40-b829-0c6a04ad4782"  
      });
      return {
        ...state,
        header: {
          ...state.header,
          rows: [{columns: ageFieldAddedArray}]
        }
      }
    
    case "ADD_NAME_FIELD": 
        const nameFieldAddedArray = state.header.rows[0].columns.concat({
			fieldId: "cc4cb134-fda0-44d8-8e92-e42ebbceb415"
			},);
      return {
        ...state,
        header: {
          ...state.header,
          rows: [{columns: nameFieldAddedArray}]
        }
      }
    case "RESET_FIELDS": 
      return {
        ...initialState
      }
    default:
      return state;
  }
}

export default reducer;