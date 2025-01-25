// ********** ASSIGNMENT PART 1 *************
// Bootstrap Component Supporting JS Scripts
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const supportFormDiv = document.querySelector("#help-support-form")
const shopFormDiv = document.querySelector("#shop-support-form")

const appleSupportCard = document.querySelector("#apple-support-card")
const appleShopCard = document.querySelector("#apple-shop-card")

appleSupportCard.addEventListener("click", () => {
    if (supportFormDiv.classList.contains("visible")) {
        supportFormDiv.classList = "invisible"
        supportFormDiv.style.display = "none"
    } else if (supportFormDiv.classList.contains("invisible")) {
        supportFormDiv.classList = "visible"
        supportFormDiv.style.display = "inline"
        shopFormDiv.style.display = "none"
    }
})

appleShopCard.addEventListener("click", () => {
    if (shopFormDiv.classList.contains("visible")) {
        shopFormDiv.classList = "invisible"
        shopFormDiv.style.display = "none"
    } else if (shopFormDiv.classList.contains("invisible")) {
        shopFormDiv.classList = "visible"
        shopFormDiv.style.display = "inline"
        supportFormDiv.style.display = "none"
    }
})

// ********** ASSIGNMENT PART 2 *************
// 4 JS Functions to support Apple Store recreation
// JS Function Variables
let productPackage = {}
let productPackageTotal = 0
let messageLog = {}

// #1 Form Validation - Phone Number
// Check to make sure there are 10 valid digits between 0-9
function formValidationPhone(phone) {
    let numCount = 0
    for (let i = 0; i < phone.length; i++) {
        let char = parseInt(phone[i])
        if (typeof(char) === 'number' && char >= 0 && char <= 9) {
            numCount ++
        }
    }
    return numCount === 10
}

// #2 Form Validation - Email Address
// Check if the email contains the @ symbol and one of three valid domain endings
// .org, .com, and .edu
function formValidationEmail(email) {
    return (email.contains("@")) 
    && (email.contains(".org") || email.contains(".com") || email.contains(".edu"))
}

// #3 For The Apple Lineup table section:
// Future feature: users can make an Apple product package by clicking one of each category
// and get the subtotal
// => Information for function will come from click event information
// => If not in object, ADD product name and price as entry in productPackage object then add to productPackageTotal
// => If already in object, REMOVE product from productPackage object then subtract price from productPackageTotal
function updateProductPackage(productName, productPrice) {
    if (!(productName in productPackage)) {
        productPackage[productName] = productPrice
        productPackageTotal += parseFloat(productPrice)
    } else {
        delete productPackage.productName
        productPackageTotal -= parseFloat(productPrice)
    }
}

// #4 Store Form Comments based on type of request
// Validate that a valid category of ticket was provided
// Store the message and category in the messageLog object
// Provide a confirmation or error message based on the validation results
function submissionConfirmationByCategory(category, name, email, phone, message) {
    if (category === "support" || category === "shop") {
        messageLog[category] = message
        console.log(`${name},\nThank you for sending in your ${category} ticket. A calendar link with available ${category} appointments will be sent to ${email} and ${phone}. We look forward to helping you!`)
    } else if (category) {
        console.log(`Invalid category ${category}. Please submit again`)
    } else {
        console.log("No category provided. Please submit again")
    }
}
