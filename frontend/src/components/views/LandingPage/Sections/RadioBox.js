import React, {useState} from 'react';
import {Collapse, Radio} from 'antd';
const {Panel} = Collapse

function RadioBox(props) {
    const [Value, setValue] = useState(1)

    const handleChange =(event) => {
        setValue (event.target.event)
        props.handleFilters(event.target.value)
    }

    const renderRadioBox = () => (
        props.list && props.list.map((value)=>(
        <Radio key={value._id} value={`${value._id}`}>{value.name}
        </Radio>
    )))
    return (
        <div>
            <Collapse defaultActiveKey={['0']}>
                < Panel header="price" key="1">
                    <Radio.Group onChange={handleChange} value={Value}>
                    {renderRadioBox()}
</Radio.Group>
                </Panel>
            </Collapse>
        </div>
    )
}

export default RadioBox