import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from './slider01.styles'
import { IQuery } from "../../../../commons/types/generated/types";

interface ISlider01Props {
    data: any
}

export default function Slider01(props:ISlider01Props):JSX.Element {

    const settings = {
        infinite: true,
        arrow: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
    };

    console.log(props.data)

    return (
        <S.BannerWrap>
            <Slider {...settings}>
                {
                    props.data?.fetchUseditem?.images.map((el:any) => (
                        <S.SlideContent key={el}>
                            <S.SlideImg src= {`https://storage.googleapis.com/${el}`} />
                        </S.SlideContent>
                    ))
                }
            </Slider>    

        </S.BannerWrap>
    )
}