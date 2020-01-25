import React from 'react'
import Tariff from './component/tarif/Tariff'

export default function App() {
    const tariff = [
        { title: "Мой онлайн +", price: "700₽/месяц", limit: "безлимитный на Tele2 России",number:800, titles:"минут на остальные номера России",traffic:"30ГБ интернета"},
        { title: "Везде онлайн", price: "500₽/месяц", limit: "безлимитный на Tele2 России",number:500,titles:"минут на остальные номера России",traffic:"40ГБ интернета"},
        { title: "Мой онлайн ",  price: "400₽/месяц", limit: "безлимитный на Tele2 России",number:500,titles:"минут на остальные номера России",traffic:"15ГБ интернета"},
    ];
    return (
        <div>
            <Tariff title={tariff[0].title} price={tariff[0].price}  limit={tariff[0].limit} number={tariff[0].number} titles={tariff[0].titles} traffic={tariff[0].traffic} />,
            <Tariff title={tariff[1].title} price={tariff[1].price}  limit={tariff[1].limit} number={tariff[1].number} titles={tariff[1].titles}traffic={tariff[1].traffic} />,
            <Tariff title={tariff[2].title} price={tariff[2].price} limit={tariff[2].limit} number={tariff[2].number}titles={tariff[2].titles}traffic={tariff[2].traffic} />
            </div>

    )
}   
