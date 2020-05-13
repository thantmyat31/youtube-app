import videoActionTypes from './video.type';

const INITIAL_STATE = {
	news: {
		loading: false,
		videos: [],
		error: ''
	},
	knowledge: {
		loading: false,
		videos: [],
		error: ''
	},
	entertain: {
		loading: false,
		videos: [],
		error: ''
	}
};

const videoReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case videoActionTypes.START_REQUEST_NEWS:
			return {
				...state,
				news: {
					...state.news,
					loading: true
				}
			};

		case videoActionTypes.SUCCESS_REQUEST_NEWS:
			return {
				...state,
				news: {
					...state.news,
					loading: false,
					videos: action.payload
				}
			};

		case videoActionTypes.FAILURE_REQUEST_NEWS:
			return {
				...state,
				news: {
					...state.news,
					loading: false,
					error: action.payload
				}
			};

		case videoActionTypes.START_REQUEST_KNOWLEDGE:
			return {
				...state,
				knowledge: {
					...state.knowledge,
					loading: true
				}
			};

		case videoActionTypes.SUCCESS_REQUEST_KNOWLEDGE:
			return {
				...state,
				knowledge: {
					...state.knowledge,
					loading: false,
					videos: action.payload
				}
			};

		case videoActionTypes.FAILURE_REQUEST_KNOWLEDGE:
			return {
				...state,
				knowledge: {
					...state.knowledge,
					loading: false,
					error: action.payload
				}
			};

		case videoActionTypes.START_REQUEST_ENTERTAIN:
			return {
				...state,
				entertain: {
					...state.entertain,
					loading: true
				}
			};

		case videoActionTypes.SUCCESS_REQUEST_ENTERTAIN:
			return {
				...state,
				entertain: {
					...state.entertain,
					loading: false,
					videos: action.payload
				}
			};

		case videoActionTypes.FAILURE_REQUEST_ENTERTAIN:
			return {
				...state,
				entertain: {
					...state.entertain,
					loading: false,
					error: action.payload
				}
			};

		default:
			return state;
	}
};

export default videoReducer;
