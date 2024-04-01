import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from './slider02.styles'
import { IQuery } from "../../../../commons/types/generated/types";

interface ISlider02Props {
    data:Pick<IQuery, "fetchUseditems">,
    el: IUseditem
}

export default function Slider02(props:ISlider02Props):JSX.Element {

    const settings = {
        infinite: true,
        arrow: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 700
    };

    return (
        <S.BannerWrap>
            <Slider {...settings}>
                {
                    props.el.map((el:any) => (
                        <S.SlideContent key={el}>
                            <S.SlideImg src= {`https://storage.googleapis.com/${el}`} />
                        </S.SlideContent>
                    ))
                }
            </Slider>    

        </S.BannerWrap>
    )
}