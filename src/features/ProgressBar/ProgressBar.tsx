import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import './ProgressBar.css'
import {progressBarSlice} from "../../app/reducers/ProgressBarSlice";
import {ICubic} from "../../app/Interfaces/ICubic";

const ProgressBar = () => {
    const dispatch = useAppDispatch()
    const {items, totalValue, cubicsArray, width, height} = useAppSelector(state => state.progressBarReducer)
    const sortedItems = [...items].sort((a,b) => a.value - b.value)

    const handleCreateBar = () => {
        const sum = sortedItems.reduce((sum, currentValue) => {
            return sum + currentValue.value
        }, 0)
        let countedCubics = Math.floor(width/22)

        const cubicsArr: ICubic[] = []
        sortedItems.map(item => {
            if (item.value > 0) {
                const cubicAmount = (item.value/sum)*countedCubics
                if (Number((cubicAmount).toFixed()) < 2) {
                    countedCubics -= 1
                    cubicsArr.push({id: Math.random(), color: item.color})
                } else {
                    for (let i = 0; i<Number((cubicAmount).toFixed()); i++) {
                        cubicsArr.push({id: Math.random(), color: item.color})
                    }
                }
            }
        })
        dispatch(progressBarSlice.actions.setTotalValue(sum))
        dispatch(progressBarSlice.actions.setTotalCubics(countedCubics))
        dispatch(progressBarSlice.actions.addItemToArray(cubicsArr))
    }

    useEffect(() => {
        handleCreateBar()
    }, [items, width])

    return totalValue ? (
        <div className={"container"}>
            <h2>Total value: {totalValue}</h2>
            <div style={{width: width, height: height}} className={"progressBar"}>
                {cubicsArray.map(item => {
                    return <div key={item.id} className={"cubic"} style={{background: item.color}}></div>
                })}
            </div>
            <div className={"itemsDescription"}>
                {sortedItems.map(item => {
                    return <div className={"description"} key={item.name}>
                        <div
                            style={{background: item.color}}
                            className={"circle"}
                        >
                        </div>
                        {item.name}: {item.value} ({(item.value/totalValue*100).toFixed(2)}%)
                    </div>
                })}
            </div>
        </div>
    ) : (
        <h1>Press the button!</h1>
    );
};

export default ProgressBar;