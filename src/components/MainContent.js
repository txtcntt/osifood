import Slide from "./Slide";
import SectionFood from "./SectionFood";
import { useState } from "react";


function MainContent() {
    let categories = [
        {
            name: 'Sản phẩm nổi bật',
            products: [
                {
                    name: 'Cá hú tươi 500g',
                    img: 'https://product.hstatic.net/200000459373/product/tai_xuong__9__e20bf99465594802829fb0178e95d85d_large.jpg',
                    price: 32800,
                    is_gift: false
                },
                {
                    name: 'Canh bí đao thịt xay 300g',
                    img: 'https://product.hstatic.net/200000459373/product/untitled_design__5__f8e03b03d3e84f33858dd2058851d090_large.jpg',
                    price: 30000,
                    is_gift: true
                },
                {
                    name: 'Canh bí đỏ tròn thịt xay 300g',
                    img: 'https://product.hstatic.net/200000459373/product/untitled_design__4__a60e0a1d092d45ec8536d6f1d7e36973_large.jpg',
                    price: 29000,
                    is_gift: false
                },
                {
                    name: 'Canh khổ qua bào vỉ 300g',
                    img: 'https://product.hstatic.net/200000459373/product/untitled_design__7__8641168a52d048e2a88d0c5ae55fa572_large.jpg',
                    price: 2000,
                    is_gift: false
                },
                {
                    name: 'Sữa lúa mạch Milo lốc 4 hộp 180ml',
                    img: 'https://product.hstatic.net/200000459373/product/untitled_design__9__c587ee8abbab4a8a967ee69e348cca8c_large.jpg',
                    price: 30400,
                    is_gift: false
                },
                {
                    name: 'Sữa lúa mạch Milo thùng 48 hộp 180ml',
                    img: 'https://product.hstatic.net/200000459373/product/untitled_design__10__c35b3e07f1f24ed49a180d83038ba1a4_large.jpg',
                    price: 347500,
                    is_gift: false
                }
            ]
        },
        {
            name: 'Rau củ quả',
            products: [
                {
                    name: 'Bạc hà 100g',
                    img: 'https://product.hstatic.net/200000459373/product/bac-ha_be6ba7c4801845bca40a680a27d7863d_large.jpg',
                    price: 2700,
                    is_gift: false
                },
                {
                    name: 'Bắp cải trắng 1kg',
                    img: 'https://product.hstatic.net/200000459373/product/untitled_design__11__c5ba3c8000d44ceeaf74d09a22ba3f98_large.jpg',
                    price: 29500,
                    is_gift: true
                },
                {
                    name: 'Bắp chuối bào 300g',
                    img: 'https://product.hstatic.net/200000459373/product/untitled_design__13__646e02c35f074b178440df8d1370ba16_large.jpg',
                    price: 17800,
                    is_gift: false
                },
                {
                    name: 'Bắp trái siêu ngọt T.Phát cặp 2 trái',
                    img: 'https://product.hstatic.net/200000459373/product/untitled_design__8__6d02e835ae9b4689bd524364b2e6eb74_large.jpg',
                    price: 26900,
                    is_gift: false
                }
            ]
        }
    ]
    const [categoryList, setCategoryList] = useState(categories);
    return (
        <div className="wrapperMain_content ">
            <Slide></Slide>
            {
                categoryList.map((item, index) => <SectionFood category={item}></SectionFood>)
            }
        </div>
    );
}
export default MainContent;