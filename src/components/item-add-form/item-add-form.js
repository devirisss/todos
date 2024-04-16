import React, { useState } from 'react';
import './item-add-form.css';
import Arrow from '../../images/arrow.png';

const ItemAddForm = ({ onItemAdded }) => {

    const [label, setLabel] = useState('');


    const onLabelChange = (e) => {
        setLabel(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded(label);
        setLabel('');
    }

        return (
            <form className="item-add-form"
                onSubmit={onSubmit}>
                <span><img src={Arrow} alt=""></img></span>
                <input type="text"
                    onChange={onLabelChange}
                    placeholder="What needs to be done?" 
                    value={label} />
            </form>
        )
    }


export default ItemAddForm;
