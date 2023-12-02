import React from 'react'
import { useSelector } from 'react-redux';
import { selectData } from './redux/reducers';

const PageNumbers = (props) => {
    const data = useSelector(selectData);

    if(data.previous && data.next){
return (
    <p>{data.previous.split("page=")[1]} | <b>{props.page} </b>| {data.next.split("page=")[1]}</p>
    )
}else if(data.previous && !data.next){
return(
    <p>{data.previous.split("page=")[1]} | <b>{props.page}</b></p>
)
}else if(!data.previous && data.next){
return(
    <p><b>{props.page}</b> | {data.next.split("page=")[1]}</p>
)
}

}

export default PageNumbers