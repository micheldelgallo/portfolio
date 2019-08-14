import {
PORTFOLIO_EXPERIENCES_LIST
,PORTFOLIO_LANGUAGES_LIST
,PORTFOLIO_QUALITIES_LIST
,PORTFOLIO_TECHNOLOGIES_LIST
,PORTFOLIO_PROJECTS_LIST
,PORTFOLIO_ISLOADING
,PORTFOLIO_FRAMEWORKS_LIST
,PORTFOLIO_FRAMEWORKS_ISAPPROVING
,PORTFOLIO_FRAMEWORKS_ISDECLINING
,PORTFOLIO_FRAMEWORKS_REMOVE
,PORTFOLIO_INFORMATION_CHANGE
} from '../actions/ActionsTypes';

import * as Api from '../utils/API';

export const portfolioListAction = () => (dispatch) =>
    new Promise(function (resolve, reject) {

        dispatch({type: PORTFOLIO_ISLOADING, payload: true})
        Api.getAllPortifolio().then(dados => {
            dispatch({type: PORTFOLIO_EXPERIENCES_LIST, payload: dados.experiences})
            dispatch({type: PORTFOLIO_LANGUAGES_LIST, payload: dados.languages})
            dispatch({type: PORTFOLIO_QUALITIES_LIST, payload: dados.qualities})
            dispatch({type: PORTFOLIO_TECHNOLOGIES_LIST, payload: dados.technologies})
            dispatch({type: PORTFOLIO_PROJECTS_LIST, payload: dados.projects})
            dispatch({type: PORTFOLIO_INFORMATION_CHANGE, field: "professional", payload: dados.professional})
            dispatch({type: PORTFOLIO_INFORMATION_CHANGE, field: "personal", payload: dados.personal})
            
            dispatch({type: PORTFOLIO_ISLOADING, payload: false})
            

            resolve([])
        })
        
    }
)

export const portfolioFrameworksListAction = (datafromsocket) => (dispatch) =>
    new Promise(function (resolve, reject) {
        dispatch({type: PORTFOLIO_FRAMEWORKS_LIST, payload: datafromsocket})
        resolve([])
    
    }
)

export const portfolioFrameworkSaveAction = (entity,act) => (dispatch) =>
    new Promise(function (resolve, reject) {

      
        dispatch({type: (act===1?PORTFOLIO_FRAMEWORKS_ISAPPROVING:PORTFOLIO_FRAMEWORKS_ISDECLINING), id: entity.id, payload:true})
       
        Api.postFramework(entity).then(dados=>{
            dispatch({type: (act===1?PORTFOLIO_FRAMEWORKS_ISAPPROVING:PORTFOLIO_FRAMEWORKS_ISDECLINING), id: entity.id, payload:false})
        })

        resolve([])
    }
)

export const portfolioFrameworksRemoveAction = (entity,) => (dispatch) =>
    new Promise(function (resolve, reject) {
        dispatch({type: PORTFOLIO_FRAMEWORKS_REMOVE, payload: entity.id})
        resolve([])
    }
)


export const portfolioInformationChangeAction = (event) => {
    return {
        type: PORTFOLIO_INFORMATION_CHANGE
        , field: event.target.name
        , payload: event.target.value
    }
}

