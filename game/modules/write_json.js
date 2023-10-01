
export function writeIntoLocalStorage(name, values){
    window.localStorage.setItem(name, values);
};

export function getFromLocalStorage(name){
    let data = window.localStorage.getItem(name);
    return data;
}
