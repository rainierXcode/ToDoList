import { monitorAllCount } from "../index/modify.js";

export function removeThisList(list){
    const parent = list.parentNode;
    parent.removeChild(list);
    monitorAllCount();
}

export function removeInContainer(container, list){
    container.removeChild(list)
    monitorAllCount()
}