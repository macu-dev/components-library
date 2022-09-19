import { Header as HeaderHOC } from '@context/Header';
import { HeaderHOCProps } from '@models/header.inteface';


import  HeaderTitle  from './HeaderTitle';
import  HeaderSubtitle  from './HeaderSubtitle';
import  HeaderPretitle  from './HeaderPretitle';
import HeaderDescription from './HeaderDescription';


export const Header: HeaderHOCProps = Object.assign( HeaderHOC, {
    Pretitle: HeaderPretitle,
    Title: HeaderTitle,
    Subtitle: HeaderSubtitle,
    Description: HeaderDescription
})


export default Header;