// changed product title to product name

import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li id="product--${product.id}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}



//add a click event listener that presents an alert box showing the price of a product when it is clicked

const findPrice = (clickEvent) => {

    const itemClicked = clickEvent.target

        if (itemClicked.id.startsWith("product")) {

            const [,productId] = itemClicked.id.split("--")

            for (const productObject of products) {

                const priceString = `$${productObject.price.toFixed(2)}`

                if (productObject.id === parseInt(productId)) {
                    window.alert(`${productObject.name} costs ${priceString}`)
                }
            }
        }
    }

document.addEventListener("click", findPrice)

