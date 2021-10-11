import React, {useState} from 'react';
import {Input} from 'antd';

const {Search} = Input


function SearchFeature(props) {
    const [SearchTerm, setSearchTerm]=useState("")
    const onChangeSearch = (event) => {
        setSearchTerm(event.currentTarget.value)
        props.refreshFunction(event.currentTarget.value)
    }
    return (
        <div>
            <Search
                value={SearchTerm}
                onChange={onChangeSearch}
                placeholer="search for product"
            />
        </div>
    )
}
export default SearchFeature