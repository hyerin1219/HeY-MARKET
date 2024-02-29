import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from './LayoutBanner.styles'

export default function LayoutBannerUI():JSX.Element {

    const settings = {
        infinite: true,
        arrow: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };

    return (
        <S.BannerWrap>
                <Slider {...settings}>
                    <S.SlideContent>
                            <S.SlideImg src="/images/image.png"/>
                    </S.SlideContent>

                    <S.SlideContent>
                        <S.SlideImg src="/images/image01.png"/>
                    </S.SlideContent>
                    
                    <S.SlideContent>
                        <S.SlideImg src="/images/image02.png"/>
                    </S.SlideContent>

                    <S.SlideContent>
                        <S.SlideImg src="/images/image03.png"/>
                    </S.SlideContent>

                </Slider>
        </S.BannerWrap>
    )
}