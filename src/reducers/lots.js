const json = {isLoaded:false};
const lots = (state = json, action) => {
	switch(action.type){
		case 'LOAD_LOT':
			return  {...state,  formData:action.formData, isLoaded:true, lotId:action.lotId};
		default:
			return state;
	}
}
export default lots;
