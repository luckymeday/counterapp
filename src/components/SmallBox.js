import React from 'react';
import { useSelector } from 'react-redux';

export default function SmallBox() {
    const count = useSelector((state) => state.count);
    return (
        <div>
            <h5>Small Box {count}</h5>
        </div>
    )
}
