import React from 'react'

export const DateFormat = (timestamp: number) => {
    const date = new Date(timestamp);
    const year = date.getFullYear(); //YYYY
    const month = ('0' + date.getMonth() + 1).slice(-2); //MM
    const day = ('0' + date.getDay()).slice(-2); //DD
    const hours = ('0' + date.getHours()).slice(-2); //HORA
    const minutes = ('0' + date.getMinutes()).slice(-2); //MINUTOS
    return day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
}
