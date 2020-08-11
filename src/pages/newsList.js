import React, { useState } from "react";

const NewsList = () => {
    const [title, setTitle] = useState(" 미래에셋자산운용, 초등학생 '온라인 경제교육' 이벤트 진행 ");
    const [summary, setSummary] = useState(" [파이낸셜뉴스] 미래에셋자산운용은 초등학생을 대상으로 온라인 경제교육 이벤트를 진행한다고 28일 밝혔다. 전국 초등학교는 코로나19 영향으로 지난 4월부터 원격수업과 등교...  ");
    const [keyword, setKeyword] = useState(" 미래에셋자산운용 ");
    const [regDate, setRegDate] = useState("  2020-07-28");
    const [thumbnail, setThumbnail] = useState(" https://imgnews.pstatic.net/image/thumb70/014/2020/07/28/4467984.jpg ");
    const [address, setAddress] = useState('/detail')
    const [arr, setArr] = useState([
        {
            title: title,
            summary: summary,
            keyword: keyword,
            regDate: regDate,
            thumbnail: thumbnail,
            address: address,
        },
        {
            title: title,
            summary: summary,
            keyword: keyword,
            regDate: regDate,
            thumbnail: thumbnail,
            address: address,
        },
    ]);

    return (
        <>
            <li className="background-style">
                <div className="w-full h-3" />
                {arr.map((item) => (
                    <div className=" background-style w-full" key={item.index}>
                        <div className="one-style items-center">
                            <div className="one-content w-full flex items-start">
                                <div className="w-30">
                                    <img className=" thumbnail-style" src={item.thumbnail} alt="media" />
                                </div>
                                <div className="w-full ">
                                    <div className="title-detail-style font-bold" onClick={()=>{window.location.assign(address)}}>
                                       {item.title}
                                    </div>
                                    <div className="summary-detail-style text-grey-500">
                                        {item.summary}
                                    </div>
                                    <span className="keyword-detail-style badge badge-sm bg-indigo-700 text-indigo-100 rounded-lg">
                                        {item.keyword}
                                    </span>
                                </div>
                                <div className=" whitespace-no-wrap text-grey-500">
                                    {item.regDate}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </li>
            <div className="w-full h-10" />
        </>
    );
};
export default NewsList;