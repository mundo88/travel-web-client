import React from 'react';
import {Helmet} from "react-helmet";

const Meta = ({title,description,thumbnail}) => {
    return (
        <Helmet>
            <title>{title || 'May Tour'} | May Tour</title>
            <meta name="description" content={description || "May Tour - Nhà tổ chức du lịch chuyên nghiệp. Website maytour.com.vn tự hào là mạng bán tour du lịch trực tuyến hàng đầu tại Việt Nam, với hơn 1.000 tour trực tuyến. Điều hành bởi May Tour." }/>
            <meta property="og:title" content={`${title || 'May Tour'} | May Tour`}></meta>
            <meta property="og:description" content={description || "May Tour - Nhà tổ chức du lịch chuyên nghiệp. Website maytour.com.vn tự hào là mạng bán tour du lịch trực tuyến hàng đầu tại Việt Nam, với hơn 1.000 tour trực tuyến. Điều hành bởi May Tour." }></meta>
            <meta property="og:url" content="https://vietmaytour.com"></meta>
            <link name="canonical" rel="canonical" href="https://vietmaytour.com"></link>
            <meta property="og:image" content={thumbnail || "https://www.vietmaytour.com/static/media/logo.ecb0c38c31bf7a8f95a4.png"}></meta>
            <meta property="og:image:alt" content="Mạng bán tour trực tuyến đầu tiên tại Việt Nam | Du lịch May Tour"></meta>
            <meta property="og:type" href="https://vietmaytour.com" content="website"></meta>
            <link name="alternate" rel="alternate" href="https://vietmaytour.com"></link>
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta name="twitter:site" content="@vietmaytour"></meta>
            <meta name="twitter:title" content="Mạng bán tour trực tuyến đầu tiên tại Việt Nam | Du lịch May Tour"></meta>
            <meta name="twitter:description" content="May Tour - Nhà tổ chức du lịch chuyên nghiệp. Website vietmaytour.com tự hào là mạng bán tour du lịch trực tuyến hàng đầu tại Việt Nam, với hơn 1.000 tour trực tuyến. Điều hành bởi May Tour."></meta>
            <meta name="googlebot" content="all, index, follow"></meta>
            <meta name="Area" content="Hanoi, Saigon, HoChiMinh, Danang,  Vietnam, Nhatrang, Cantho"></meta>
            <meta name="revisit-After" content="1 days"></meta>
            <meta name="rating" content="general"></meta>
            <meta name="doc-type" content="web page"></meta>
            <meta name="pics-label" content="G"></meta>
            <meta name="serps" content="1, 2, 3, 10, 11, 12, 13, ATF"></meta>
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="627"/>
        </Helmet>
    );
}

export default Meta;

