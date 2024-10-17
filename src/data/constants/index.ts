import pathPage from "@/libs/path";

export const NAVBAR_DATA = {
    home: {
        navigate: [
            { id: 1, name: "Home", href: pathPage.home },
            {
                id: 2,
                name: "Services",
                href: pathPage.services,
                items: [
                    { id: 1, name: "charity", href: pathPage.charity },
                    { id: 2, name: "restaurant", href: pathPage.restaurant },
                    { id: 3, name: "sports", href: pathPage.sports },
                    { id: 4, name: "ecommerce", href: pathPage.ecommerce },
                    { id: 5, name: "AI", href: pathPage.AI },
                    { id: 6, name: "NFT", href: pathPage.NFT },
                    { id: 7, name: "Dental", href: pathPage.Dental },
                    { id: 8, name: "event", href: pathPage.event },
                ],
            },
            { id: 3, name: "Expertise", href: pathPage.expertise },
            { id: 4, name: "Cases", href: pathPage.cases },
            { id: 5, name: "Pricing", href: pathPage.pricing },
            { id: 6, name: "Company", href: pathPage.company },
        ],
        buttons: [{ id: 1, name: "Start a Project", href: "#" }],
    },
    charity: {
        navigate: [
            { id: 1, name: "Home", href: pathPage.home },
            {
                id: 2,
                name: "Services",
                href: pathPage.services,
                items: [
                    { id: 1, name: "charity", href: pathPage.charity },
                    { id: 2, name: "restaurant", href: pathPage.restaurant },
                    { id: 3, name: "sports", href: pathPage.sports },
                    { id: 4, name: "ecommerce", href: pathPage.ecommerce },
                    { id: 5, name: "AI", href: pathPage.AI },
                    { id: 6, name: "NFT", href: pathPage.NFT },
                    { id: 7, name: "Dental", href: pathPage.Dental },
                    { id: 8, name: "event", href: pathPage.event },
                ],
            },
            { id: 3, name: "Expertise", href: pathPage.expertise },
            { id: 4, name: "Cases", href: pathPage.cases },
            { id: 5, name: "Pricing", href: pathPage.pricing },
            { id: 6, name: "Company", href: pathPage.company },
        ],
        buttons: [{ id: 1, name: "Donate Now", href: "#" }],
    },
};