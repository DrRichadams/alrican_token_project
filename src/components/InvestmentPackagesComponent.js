import React from "react";
import { InvestmentPackages, PackageTitle1, PackageTitle, PackagePrize, PackageBtn, PackageBox } from "../features/HomePageStyledComponents";
import { investment_packages } from "../constants/DATA";

const InvestmentPackagesComponent = () => {
    return(
        <InvestmentPackages>
            { investment_packages.map((item, index) => (
                <PackageBox bg_color={item.bg_color}>
                    <PackageTitle1 color={item.color}>{item.package_name}</PackageTitle1>
                    <PackageTitle color={item.color}>{item.story}</PackageTitle>
                    <PackagePrize>USD${item.fee}</PackagePrize>
                    <PackageBtn>Get Started</PackageBtn>
                </PackageBox>
            )) }
        </InvestmentPackages>
    )
}

export default InvestmentPackagesComponent;