import React from 'react'
import TariffItem from './TariffItem';

export default function TariffList() {
    const tariff = [
        {
            title: "Везде онлайн ", price: 500, hit: 'https://images.by.prom.st/87022397_w200_h200_hit-prodazh.jpg',
            symbol: "₽", month: "/месяц", socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005', 'https://msk.tele2.ru/api/media/asset?mediaId=m220001', 'https://msk.tele2.ru/api/media/asset?mediaId=m220003', 'https://msk.tele2.ru/api/media/asset?mediaId=m220006', 'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041', 'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',], socialMediaStatus: true, traffic: 40, volium: "GB",
            text: "+безлимитные", number: 500, time: "минут", limit: "безлимитный на Tele2 России", message: 50, sms: "SMS",
        },
        {
            title: "Мой онлайн ", price: 400, symbol: "₽", month: "/месяц", socialMedia: ['https://msk.tele2.ru/api/media/asset?mediaId=m220005', 'https://msk.tele2.ru/api/media/asset?mediaId=m220001', 'https://msk.tele2.ru/api/media/asset?mediaId=m220003', 'https://msk.tele2.ru/api/media/asset?mediaId=m220006', 'https://msk.tele2.ru/api/media/asset?mediaId=m220004',
                'https://msk.tele2.ru/api/media/asset?mediaId=m1990041', 'https://msk.tele2.ru/api/media/asset?mediaId=m1680033',]

            , value: "интернет за границей", socialMediaStatus: true, traffic: 15, volium: "GB", text: "+безлимитные",
            number: 500, time: "минут",
            limit: "безлимитный на Tele2 России", message: false, sms: false
        },
        {
            title: "Мой онлайн +", price: 700, symbol: "₽", month: " /месяц",
            socialMedia:  ['https://msk.tele2.ru/api/media/asset?mediaId=m220005','https://msk.tele2.ru/api/media/asset?mediaId=m220001','https://msk.tele2.ru/api/media/asset?mediaId=m220003','https://msk.tele2.ru/api/media/asset?mediaId=m220006','https://msk.tele2.ru/api/media/asset?mediaId=m220004',
            'https://msk.tele2.ru/api/media/asset?mediaId=m1990041','https://msk.tele2.ru/api/media/asset?mediaId=m1680033', ]
            , socialMediaStatus: true, traffic: 30, volium: "GB", text: "+безлимитные",
            imgUrl: "https://msk.tele2.ru/api/media/asset?mediaId=m220004", number: 800, time: "минут",
            limit: "безлимитный на Tele2 России", message: false, sms: false,
        },
        {
            title: "Мой разговор", price: 200, symbol: "₽", month: "/месяц", socialMediaStatus: false, traffic: 2, volium: "GB", text: false, number: 200,
            time: "минут", limit: "безлимитный на Tele2 России", message: false, sms: false
        },
        {
            title: "Мой Tele2", price: 7, symbol: "₽", month: "день", socialMediaStatus: false, traffic: 0, volium: false, text: false, number: 0,
            time: false, limit: "безлимитный на Tele2 России", message: false, sms: false
        },
        {
            title: "Безлимит ", price: 650, symbol: "₽", month: "/месяц", socialMediaStatus: false, traffic: 0, volium: "Безлимитный интернет",
            limit: "безлимитный на Tele2 России", number: 500, time: "минут", message: 50, sms: "SMS"
        },
        {
            title: "Премиум ", price: 1500, symbol: "₽", month: "/месяц", socialMediaStatus: false, traffic: 50, volium: "GB",
            limit: "безлимитный на Tele2 России", number: 2000, time: "минут", message: 500, sms: "SMS"
        },
        {
            title: "Классический ", text: "Без абанентской платы", price: false, socialMediaStatus: false,
            traffic: false, volium: false, limit: false, number: false, time: false, message: false, sms: false
        },
        {
            title: "Интернет для устройств", text: "Без абанентской платы",
            price: false, socialMediaStatus: false, traffic: 0, volium: false, limit: false, number: 0, time: false, massage: false, sms: false
        },
        {
            title: "Интеренет для вещей", price: 100, symbol: "₽", month: "/месяц", socialMediaStatus: false, traffic: 300, volium: "GB", limit: false,
            number: 30, time: "минут", message: 100, sms: "SMS"
        },
    ];

    const tarif = tariff.map(p => ({
        ...p,


    }))

    return (
        <div>
            {tariff.map(o => <TariffItem tariff={o} />)}
        </div>
    )
}
