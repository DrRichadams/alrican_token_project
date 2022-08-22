export const getExtention = (name) => {
    let nameArr = name.split('.');
    let extention = nameArr[nameArr.length - 1];
    return extention;
}