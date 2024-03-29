import React from 'react';

const NewsList = (props)=>{
    console.log(props);
    const myNews = props.newsData.map((data) => {
        return(
            <div key={data.id}>
                <h3>{data.title}</h3>
                <div>
                    {data.feed}
                </div>
            </div>
        )
    })
    return(
        <div>
            {myNews}
        </div>
    );
}
export default NewsList;