import {
    PORTFOLIO_EXPERIENCES_LIST
    ,PORTFOLIO_LANGUAGES_LIST
    ,PORTFOLIO_QUALITIES_LIST
    ,PORTFOLIO_TECHNOLOGIES_LIST
    ,PORTFOLIO_PROJECTS_LIST
    , PORTFOLIO_ISLOADING
    , PORTFOLIO_FRAMEWORKS_LIST
    , PORTFOLIO_FRAMEWORKS_ISAPPROVING
    , PORTFOLIO_FRAMEWORKS_ISDECLINING
    , PORTFOLIO_FRAMEWORKS_REMOVE
    , PORTFOLIO_INFORMATION_CHANGE
} from '../actions/ActionsTypes'

import {InformationEntity} from '../entities/InformationEntity'

const INITIAL_STATE = {
    experiences:[]
    ,languages:[]
    ,qualities:[]
    ,technologies:[]
    ,projects:[]
    ,frameworks:[]
    ,isloading:true
    ,InformationEntity
}





export default (state= INITIAL_STATE,action)=>{
    switch(action.type){

        case PORTFOLIO_EXPERIENCES_LIST:
            return {...state, experiences: action.payload}

        case PORTFOLIO_LANGUAGES_LIST:
            return {...state, languages: action.payload}
        
        case PORTFOLIO_QUALITIES_LIST:
            return {...state, qualities: action.payload}
        
        case PORTFOLIO_TECHNOLOGIES_LIST:
            return {...state, technologies: action.payload}
        
        case PORTFOLIO_PROJECTS_LIST:
            return {...state, projects: action.payload}

        case PORTFOLIO_ISLOADING:
            return {...state, isloading: action.payload}

        case PORTFOLIO_FRAMEWORKS_LIST:
            return {...state, frameworks: action.payload}
        
        case PORTFOLIO_FRAMEWORKS_ISAPPROVING:
                return {
                    ...state,
                    frameworks: state.frameworks.map(
                        (item, i) => item.id === action.id ?
                            { ...item, isapproving: action.payload }
                            : item
                    )
                }

        case PORTFOLIO_FRAMEWORKS_ISDECLINING:
                return {
                    ...state,
                    frameworks: state.frameworks.map(
                        (item, i) => item.id === action.id ?
                            { ...item, isdeclining: action.payload }
                            : item
                    )
                }
                
        case PORTFOLIO_FRAMEWORKS_REMOVE:
                return { ...state, frameworks: [...state.frameworks.filter(c => action.payload !== c.id)] }

  

        case PORTFOLIO_INFORMATION_CHANGE:
                    return { ...state, InformationEntity: { ...state.InformationEntity, [action.field]: action.payload } }
    
        default:
            return state;
    }
}