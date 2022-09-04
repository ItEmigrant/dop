import React from 'react';

type ButtonType = {
    name: string,
    callBack: () => void
}

export const Button = (props:ButtonType) => {

    const {name, callBack} = props
    const onClickHan = () => {
        callBack()
    }

    return (
    <button onClick={onClickHan}>{name}</button>
    )
}