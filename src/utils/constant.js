const success = {
    SUCCESS: "success..",
    USER_CREATED: "User is created..",
    ADDED_ITEMS: "Items added successfully",
    NO_USER_FOUND: "No User Found Please do Sign Up first",
    OTP_CREATED: "OTP sent to your email Id. Now Please Login with OTP",
    OTP_EXPIRED: "OTP is expired now. Please generate New OTP",
    LOGGED_IN: "User logged in successfully",
    WRONG_CRED: "Wrong Credentials. Try again...",
   
    INVALID_OTP: "OTP is Invalid. Try again...",
    OTP_LIMIT: "You exceed your Wrong OTP limit. Now generate New OTP after 2 Minutes",
    ORDER_PLACED: "Your order is placed.",
    ADD_TO_CART: "Items are added to the cart.",
    REMOVE_FROM_CART: "Items Removed from the cart",
    CLEAR_CART: "Your cart is clear now",
    ALREADY_CLEAR_CART: "No item found in your cart",
    ORDER_EDITED: "Your order has been edited and new invoice is sent to Your email id.",
    ITEMS_NOT_FOUND: "Items not found in your cart"
}
const error = {
    WRONG: "Something went wrong..",
    LATLONGRQD:"Latitude and Longitude required",
    INVDRES:'Invalid response from weather API',
    ALREADY_USER: "User is already registered..",
    NO_CATEGORY: "Category not found..",
    NO_OTP: "Please Generate OTP First..",
    NOT_IN_CART: "Items not found in your cart.",
    INVALID_JWT: "Unauthorized access",
    WRONG_WITH_JWT: "Something went wrong with jwt token",
    CART_IS_EMPTY: "No items are found in cart",
    USER_NOT_FOUND: "This is user not registerd. Please do sign Up first..",
    MUST_BE_ARRAY: "Items must be a Array of objects.",
    INVALID_ITEM_ID: "All item ids should be valid",
    COUNT_NUMBER: "All items quantity value should be Number.",
    COUNT_VALUE: "All items quantity value must be greater than Zero.",
    ITEM_LIST_EMPTY: "Items list must not be Empty.",
    ITEMS_REQUIRED: "Items is required",
    ORDER_NOT_FOUND: "Order is not found with this order id.",
    NOT_AUTHORIZED: "You are not authorized to perform this or You are trying to change other customer's order.",
    NO_ITEM: "No item found.",
    ITEMS_NOT_FOUND: "Items not found in your cart.",
    NO_JWT: "Token not found",
    MISSING_INPUTS: "Required input for registration are not found"
}

const company = {
    NAME: "Webvillee Sweet Cafe Management System.",
    ADDRESS: "Aru Plaza Above manyavar showroom",
    ZIP: "452001",
    CITY: "Indore",
    COUNRTY: "India",
}

module.exports = { success, error, company };