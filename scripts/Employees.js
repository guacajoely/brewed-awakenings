import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}


//add a click event listener that presents an alert box showing how many products an employee has sold when their name is clicked.

// FIRST WE ALSO NEED TO IMPORT THE ARAY OF ORDERS
import { getOrders } from "./database.js"
const ordersArray = getOrders()

document.addEventListener("click",  (clickEvent) => {

    //HTML CLICK EVENT TARGET
    const itemClicked = clickEvent.target

        //DID THE USER CLICK ON AN EMPLOYEE?
        if (itemClicked.id.startsWith("employee")) {

            //WHAT IS THE PRIMARY KEY OF THE CLICKED EMPLOYEE?
            const [,employeePrimaryKey] = itemClicked.id.split("--")


            //LOOP THROUGH THE ORDERS ARRAY AND COUNT EACH ORDER WITH A MATCHING EMPLOYEEID
            let orderCount = 0
            for (const orderObject of ordersArray){
                if (parseInt(employeePrimaryKey) === orderObject.employeeId){
                    orderCount++
                }
            }

            //FIND THE EMPLOYEES NAME
            // (could you also use: matchingEmployee = itemClicked.id.innerHTML or innerText ???)

            let matchingEmployee = null
            for (const employeeObject of employees){
                if (parseInt(employeePrimaryKey) === employeeObject.id){
                    matchingEmployee = employeeObject.name
                }
            }



            // INSERT MATCHINGPET AND FOUNDWALKER NAMES INTO ALERT
            window.alert(`${matchingEmployee} sold ${orderCount} products`)

        }
    }
)

