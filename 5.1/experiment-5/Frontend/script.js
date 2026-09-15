const API_URL = "http://localhost:8080/api/users";

const form = document.getElementById("userForm");
const uidInput = document.getElementById("uid");
const nameInput = document.getElementById("name");
const message = document.getElementById("message");
const tableBody = document.getElementById("userTableBody");
const refreshBtn = document.getElementById("refreshBtn");

let editingUid = null;

async function loadUsers() {
    try {
        const response = await fetch(API_URL);
        const result = await response.json();

        tableBody.innerHTML = "";

        result.data.forEach(user => {

            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${user.uid}</td>
                <td>${user.name}</td>
                <td>
                    <button class="edit-btn"
                        onclick="editUser('${user.uid}', '${user.name}')">
                        Edit
                    </button>

                    <button class="delete-btn"
                        onclick="deleteUser('${user.uid}')">
                        Delete
                    </button>
                </td>
            `;

            tableBody.appendChild(row);
        });

    } catch (error) {
        message.textContent = "Unable to connect to server.";
        message.style.color = "red";
    }
}

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const uid = uidInput.value.trim();
    const name = nameInput.value.trim();

    if (!uid || !name) {
        message.textContent = "UID and Name are required.";
        message.style.color = "red";
        return;
    }

    try {

        let response;

        if (editingUid === null) {

            response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    uid: uid,
                    name: name
                })
            });

        } else {

            response = await fetch(`${API_URL}/${editingUid}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    uid: editingUid,
                    name: name
                })
            });
        }

        const result = await response.json();

        message.textContent = result.message;
        message.style.color = result.success ? "green" : "red";

        if (result.success) {

            form.reset();
            editingUid = null;
            uidInput.disabled = false;
            form.querySelector("button[type='submit']").textContent = "Add User";

            loadUsers();
        }

    } catch (error) {

        message.textContent = "Server connection failed.";
        message.style.color = "red";
    }
});

function editUser(uid, name) {

    editingUid = uid;

    uidInput.value = uid;
    nameInput.value = name;

    uidInput.disabled = true;

    form.querySelector("button[type='submit']").textContent = "Update User";

    nameInput.focus();
}

async function deleteUser(uid) {

    if (!confirm("Are you sure you want to delete this user?")) {
        return;
    }

    try {

        const response = await fetch(`${API_URL}/${uid}`, {
            method: "DELETE"
        });

        const result = await response.json();

        message.textContent = result.message;
        message.style.color = result.success ? "green" : "red";

        loadUsers();

    } catch (error) {

        message.textContent = "Unable to delete user.";
        message.style.color = "red";
    }
}

refreshBtn.addEventListener("click", loadUsers);

loadUsers();