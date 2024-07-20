import { gql, useMutation, useQuery } from '@apollo/client';
import * as A from './marketsDetail.styles';
import { FETCH_USED_ITEM } from './marketDetail.queries';
import { IQuery, IQueryFetchUseditemArgs } from '../../../../commons/types/generated/types';
import { useRouter } from 'next/router';
import { getDate } from '../../../../commons/libraries/utils';
import Slider01 from '../../../commons/slider/01/slider01';
import { useEffect } from 'react';

const DELETE_USED_ITEM = gql`
    mutation deleteUseditem($useditemId: ID!) {
        deleteUseditem(useditemId: $useditemId)
    }
`;

declare const window: typeof globalThis & {
    kakao: any;
};

export default function MarketDetailUIPage() {
    const router = useRouter();

    const { data } = useQuery<Pick<IQuery, 'fetchUseditem'>, IQueryFetchUseditemArgs>(FETCH_USED_ITEM, {
        variables: {
            useditemId: String(router.query.marketId),
        },
    });

    const userAddress = data?.fetchUseditem?.useditemAddress?.address;
    console.log(userAddress);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=b2f7deca5ab3989231a32111ffa2246b&autoload=false&libraries=services';
        document.head.appendChild(script);

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map'); // 지도를 담을 영역의 DOM 레퍼런스
                const map = new window.kakao.maps.Map(container, {
                    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 기본 위치 (수정 필요)
                    level: 3, // 지도의 확대 레벨
                });

                const geocoder = new window.kakao.maps.services.Geocoder();

                geocoder.addressSearch(userAddress, function (result: any, status: any) {
                    if (status === window.kakao.maps.services.Status.OK) {
                        const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

                        // 결과값으로 받은 위치를 마커로 표시합니다
                        const marker = new window.kakao.maps.Marker({
                            map: map,
                            position: coords,
                        });

                        // 인포윈도우로 장소에 대한 설명을 표시합니다
                        const infowindow = new window.kakao.maps.InfoWindow({
                            content: `<div style="padding:5px;">${userAddress}</div>`,
                        });
                        infowindow.open(map, marker);

                        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                        map.setCenter(coords);
                    }
                });
            });
        };
    }, [userAddress]); // userAddress가 변경될 때마다 다시 실행됩니다.

    const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

    const onClickList = (): void => {
        router.push('../markets');
    };

    const onDeleteUseditem = async (): Promise<void> => {
        try {
            await deleteUseditem({
                variables: {
                    useditemId: String(router.query.marketId),
                },
            });
            alert('게시물 삭제를 완료하였습니다.');
            router.push('../markets');
        } catch (error) {
            if (error instanceof Error) alert(error.message);
        }
    };

    const onClickUpdateitem = () => {
        router.push(`../markets/${router.query.marketId}/edit`);
    };

    return (
        <>
            <A.Wrap>
                <A.CenterBox>
                    <A.FlexBox2>
                        <A.ProfileImg src="/images/profile.png"></A.ProfileImg>
                        <A.NameBox>
                            <A.ProfileName>{data?.fetchUseditem.seller?.name}</A.ProfileName>
                            <A.Date>{getDate(data?.fetchUseditem.createdAt)}</A.Date>
                        </A.NameBox>
                    </A.FlexBox2>

                    <A.FlexBox2>
                        <A.YellowImg src="/images/link.png"></A.YellowImg>
                        <A.YellowImg src="/images/location.png"></A.YellowImg>
                    </A.FlexBox2>
                </A.CenterBox>

                <A.Line></A.Line>

                <A.CenterBox>
                    <div>
                        <A.UsedItemId>{data?.fetchUseditem.name}</A.UsedItemId>
                        <A.UsedItemName>{data?.fetchUseditem.remarks}</A.UsedItemName>
                    </div>
                    <div>
                        <A.HartImg src="/images/heart.png" />
                        <A.HartNum>00</A.HartNum>
                    </div>
                </A.CenterBox>

                <A.UsedItemPrice>{data?.fetchUseditem.price}</A.UsedItemPrice>

                <Slider01 data={data} />

                <A.UsedItemContent>{data?.fetchUseditem.contents}</A.UsedItemContent>
                <A.UsedItemTags>{data?.fetchUseditem.tags}</A.UsedItemTags>

                <A.MapBox id="map"></A.MapBox>

                <A.ListButtonBox>
                    <A.ListButton2 onClick={onClickUpdateitem}>수정하기</A.ListButton2>
                    <A.ListButton onClick={onClickList}>목록으로</A.ListButton>
                    <A.ListButton2 onClick={onDeleteUseditem}>삭제하기</A.ListButton2>
                </A.ListButtonBox>
            </A.Wrap>
        </>
    );
}
