import React, {useState} from 'react';
import './Props.css'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {IProgressBarItem} from "../../app/Interfaces/IProgressBarItem";
import {progressBarSlice} from "../../app/reducers/ProgressBarSlice";

const Props = () => {
    const dispatch = useAppDispatch()
    const {items, height, width} = useAppSelector(state => state.progressBarReducer)
    const [itemsState, setItemsState] = useState<string>('')
    const [widthValue, setWidthValue] = useState<string>('1000')
    const [heightValue, setHeightValue] = useState<string>('50')

    const handleInputItemsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItemsState(event.target.value)
    }
    const handleWidthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setWidthValue(event.target.value)
    }
    const handleHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHeightValue(event.target.value)
    }

    const handleAddItem = () => {
        const item: IProgressBarItem = JSON.parse(itemsState)
        dispatch(progressBarSlice.actions.addItem(item))
    }
    const handleChangeWidth = () => {
        dispatch(progressBarSlice.actions.setWidth(Number(widthValue)))
    }
    const handleChangeHeight = () => {
        dispatch(progressBarSlice.actions.setHeight(Number(heightValue)))
    }

    return (
        <div className={"propsCont"}>
            <div className={"inputItem"}>
                <h3>Items</h3>
                {items.map(item => {
                    return <div key={item.name}>{JSON.stringify(item)}</div>
                })}
                <input placeholder={"Write an object same as upper items"} value={itemsState} onChange={handleInputItemsChange}/>
                <button onClick={handleAddItem}>Add an object</button>
            </div>
            <div className={"inputItem"}>
                <h3>Height</h3>
                {height}
                <input placeholder={"height"} value={heightValue} onChange={handleHeightChange}/>
                <button onClick={handleChangeHeight}>Set height</button>
            </div>
            <div className={"inputItem"}>
                <h3>Width</h3>
                {width}
                <input placeholder={"width"} value={widthValue} onChange={handleWidthChange}/>
                <button onClick={handleChangeWidth}>Set width</button>
            </div>
        </div>
    );
};

export default Props;