let addExpense = document.getElementById("add-expense");
addExpense.addEventListener("click", showDescription);

window.addEventListener('DOMContentLoaded', (event) => {
    for(let i=0;i<localStorage.length;i++){
        let userVal = JSON.parse(localStorage.getItem(localStorage.key(i)))
        showData(userVal)
    }
});

function showDescription(e){
    e.preventDefault();
    let amount = document.getElementById("amount").value;
    let description = document.getElementById("description").value;
    let category = document.getElementById("category").value;
    let li = document.createElement('li');
    li.className="li-items";
    const object = {
        amount1 : amount,
        description1 : description,
        category1: category
    }
    localStorage.setItem(object.amount1, JSON.stringify(object));
    showData(object)

}

function showData(expense){
    if(localStorage.getItem(expense.amount1)!==null){
        removeExpenseFromScreen(expense.amount1)
    }
    let parent = document.getElementById("list-items")
    let child = `<li id=${expense.amount1}>${expense.amount1}${expense.description1}${expense.category1}
    <button onclick=deleteExpense('${expense.amount1}')> Delete Expense </button>
    <button onclick="editExpense('${expense.amount1}','${expense.description1}','${expense.category1}')"> Edit Expense </button>`
    parent.innerHTML = parent.innerHTML+child
}

function removeExpenseFromScreen(amount1){
    let parent = document.getElementById('list-items')
    let child = document.getElementById(amount1)
    if(child){
        parent.removeChild(child)
    }
}
 
function deleteExpense(amount1){
    localStorage.removeItem(amount1);
    removeExpenseFromScreen(amount1);

}

function editExpense(amount1, description1, category1){
    document.getElementById('amount').value=amount1
    document.getElementById('description').value=description1
    document.getElementById('category').value=category1
    deleteExpense(amount1);
}
