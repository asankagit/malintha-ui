export function popLightBox(item){
    return {
        type: 'OPEN_LIGHTBOX',
        payload:true
    }
}

export function closeLightBox(item){
    return{
        type: 'CLOSE_LIGHTBOX',
        payload:false
    }
}