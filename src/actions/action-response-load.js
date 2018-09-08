
 
export function dataRecieved(dataItem){
    console.log("data_recieved_action:",dataItem)
    return{
        type :'RESPONSE_REC',
        payload : {title:' response received dataItem'}
    }
}
