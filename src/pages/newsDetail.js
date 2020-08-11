import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const NewsDetail = () => {
    const [contents, setContents] = useState(
        "이는 'FAANG'로도 불리는 페이스북, 아마존, 애플, 넷플릭스, 구글 등 대표적인 기술주들이 미국증시에 다수 포진했기 때문으로 보인다. 게다가 국내증권사들도 최근 몇 년 사이 미국 우량종목들에 대한 리포트를 크게 늘리며 정보접근성이 높아진 것도 영향을 미친 것으로 풀이된다.\n")
    const [title, setTitle] = useState('세계로 뻗는 개미들, 필리핀·이탈리아에서 이 주식 샀다')
    const [regDate, setRegDate] = useState('2020-07-28')
    const [image, setImage] = useState("https://imgnews.pstatic.net/image/008/2020/07/27/0004445977_001_20200727145803090.jpg?type=w647")

    return <>
        <div className=" w-full p-10">
            <div className="section-title">
                <div className="flex flex-row items-center justify-between mb-4">
                    <div className="flex flex-col">
                        <div className="title font-bold">NEWS</div>
                        <div className="subtitle no-side-margin">NEWS DETAIL PAGE</div>
                    </div>
                </div>
            </div>

                <div className="detail-outline border border-grey-100">
                    <div className="flex flex-row items-center justify-between mb-6">
                        <div className="thumbnail-style flex flex-col">
                            <img src={image} alt="media"
                                 className="object-cover h-48 w-full"/>
                        </div>
                    </div>
                    <div className="flex-row items-center justify-between mb-6">

                        <div className=" title-style font-bold text-black ">
                            <h2> {title}</h2>
                        </div>
                    </div>
                    <div className="regdate-style">
                        <p><span className="regdate-style font-light text-black">{regDate}</span></p>
                    </div><br/>

                    <div className="content-width text-sm font-medium text-black"><h6>{contents}</h6>
                        <br/><br/>

                        <button
                            className="back-button btn btn-default btn-outlined hover:bg-grey-300 text-gray-100 btn-">
                            <Link to="/list"><span>Back</span></Link>
                        </button>
                    </div>
                </div>
        </div>
    </>
}
export default NewsDetail