import {_} from '../../utlis/index.js';
import {renderNavTab} from '../../components/index.js';
const gFooterWrapper=_('.g-footer-container')
const bottomData = [
    {
        icon: '../../assets/img/homeIcon.png',
        activeIcon: '../../assets/img/homeIconActive.png',
        text: '首页',
        to: '../home/index.html',
        alt: 'home-icon',
        path: 'home'//标记
    },
    {
        icon: '../../assets/img/myIcon.png',
        activeIcon: '../../assets/img/myIconActive.png',
        text: '我的',
        to: '../my/index.html',
        alt: 'my-icon',
        path: 'my'//标记
    },
    {
        icon: '../../assets/img/orderIcon.png',
        activeIcon: '../../assets/img/orderIconActive.png',
        text: '我的',
        to: '../order/index.html',
        alt: 'order-icon',
        path: 'order'//标记
    }
]




new renderNavTab (gFooterWrapper,bottomData)