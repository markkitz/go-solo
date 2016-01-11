const json = {years : [ ],
    selectedYearId:null,
    selectedTerm: null,
    isLoaded:false
    };
const coursePackYearListing = (state= json, action) => {
	switch(action.type){
		case 'SELECT_COURSE_PACK_YEAR':
			return  {...state,  selectedYearId: action.yearId};
        case 'UNSELECT_COURSE_PACK_YEAR':
			return  {...state,  selectedYearId: null};
        case 'SELECT_TERM':
            return {...state, selectedTerm:action.termId};
        case 'UNSELECT_COURSE_PACK_TERM':
            return {...state, selectedTerm:null};
        case 'LOAD_COURSE_PACK_YEAR_LISTING':
            let dbState = action.years;
            dbState.isLoaded = true;
           return dbState;
		default:
			return state;
	}
}
export default coursePackYearListing;
