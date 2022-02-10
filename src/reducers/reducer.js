import {
	OPEN_SIDEBAR,
	CLOSE_SIDEBAR
}
	from '../actions';
const reducer = (state, action) => {
	switch (action.type) {
		case OPEN_SIDEBAR:
			return {
				...state,
				isSidebaropen: true
			}
		case CLOSE_SIDEBAR:
			return {

				...state,
				isSidebaropen: false
			}
	default :
			return `Error occured due to ${action.type}`
	}
}
export default reducer;