const form = document.querySelector("form");
const tbody = document.querySelector("tbody");
const table = document.querySelector("table");
function onAddInfo(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const vaxName = document.getElementById("vaxName").value;
    tbody.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${age}</td>
                <td>${vaxName}</td>
                <td><button class="deleteBtn">Delete</button></td>
            </tr>
        `;
}

function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    }

    const btn = e.target;
    btn.closest("tr").remove();
}

form.addEventListener("submit", onAddInfo);
table.addEventListener("click", onDeleteRow);

