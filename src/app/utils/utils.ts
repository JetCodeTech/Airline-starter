
export const setItem =(key: string,value: string)=>{
  localStorage.setItem(key,value)
}

export const getItem = (key: string) =>{
    let val: string = localStorage.getItem(key) || ''
    if(val.length){
        return JSON.parse(val)
    }
    return null;
}
