import pathPage from "@/libs/path";

export const NAVBAR_DATA = {
    home: {
        navigate: [
            { id: 1, name: "Home", href: pathPage.home },
            { id: 3, name: "charity", href: pathPage.charity },
            { id: 3, name: "restaurant", href: pathPage.restaurant },
            { id: 4, name: "sports", href: pathPage.sports },
            { id: 5, name: "ecommerce", href: pathPage.ecommerce },
            { id: 6, name: "AI", href: pathPage.AI },
        ],
        buttons: [{ id: 1, name: "Start a Project", href: "#" }],
    },
    charity: {
        navigate: [
            { id: 1, name: "Home", href: pathPage.home },
            { id: 3, name: "charity", href: pathPage.charity },
            { id: 3, name: "restaurant", href: pathPage.restaurant },
            { id: 4, name: "sports", href: pathPage.sports },
            { id: 5, name: "ecommerce", href: pathPage.ecommerce },
            { id: 6, name: "AI", href: pathPage.AI },
        ],
        buttons: [{ id: 1, name: "Donate Now", href: "#" }],
    },
    restaurant: {
        navigate: [
            { id: 1, name: "Home", href: pathPage.home },
            { id: 3, name: "charity", href: pathPage.charity },
            { id: 3, name: "restaurant", href: pathPage.restaurant },
            { id: 4, name: "sports", href: pathPage.sports },
            { id: 5, name: "ecommerce", href: pathPage.ecommerce },
            { id: 6, name: "AI", href: pathPage.AI },
        ],
        buttons: [{ id: 1, name: "Order Now", href: "#" }],
    },
};