/**
 * Practice (Menengah): DOM Events
 * Fokus: addEventListener, event object, preventDefault, delegation, bubbling, stopPropagation
 */

// ===================== UTIL: EVENT LOG =====================
const logList = document.getElementById("event-log");
const logClearBtn = document.getElementById("log-clear");

function logEvent(message) {
  const li = document.createElement("li");
  const time = new Date().toLocaleTimeString();
  li.textContent = `[${time}] ${message}`;
  logList.prepend(li);
}

logClearBtn.addEventListener("click", () => {
  logList.innerHTML = "";
});

// ===================== 1) MINI TODO (Delegation) =====================
const todoInput = document.getElementById("todo-input");
const todoAddBtn = document.getElementById("todo-add");
const todoList = document.getElementById("todo-list");
const onlyActive = document.getElementById("only-active");
const clearDoneBtn = document.getElementById("clear-done");

let todoId = 0;

function createTodoItem(text) {
  todoId += 1;

  const li = document.createElement("li");
  li.className = "todo-item";
  li.dataset.id = String(todoId);

  const left = document.createElement("div");
  left.className = "todo-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "todo-check";
  checkbox.setAttribute("aria-label", "Tandai selesai");

  const span = document.createElement("span");
  span.className = "todo-text";
  span.textContent = text;
  span.title = "Klik untuk toggle selesai";

  left.appendChild(checkbox);
  left.appendChild(span);

  const del = document.createElement("button");
  del.type = "button";
  del.className = "todo-del";
  del.dataset.action = "delete";
  del.textContent = "Hapus";

  li.appendChild(left);
  li.appendChild(del);

  return li;
}

function addTodoFromInput() {
  const text = todoInput.value.trim();
  if (!text) {
    logEvent("Todo: input kosong (tidak ditambahkan)");
    return;
  }

  const li = createTodoItem(text);
  todoList.appendChild(li);
  todoInput.value = "";
  todoInput.focus();
  logEvent(`Todo: tambah item "${text}"`);

  applyFilter();
}

function applyFilter() {
  const activeOnly = onlyActive.checked;
  const items = todoList.querySelectorAll(".todo-item");
  items.forEach((item) => {
    const isDone = item.classList.contains("done");
    item.style.display = activeOnly && isDone ? "none" : "";
  });
}

todoAddBtn.addEventListener("click", addTodoFromInput);

todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    addTodoFromInput();
    return;
  }
  if (e.key === "Escape") {
    todoInput.value = "";
    logEvent("Todo: input di-clear (Esc)");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "/") {
    e.preventDefault();
    todoInput.focus();
    logEvent("Todo: fokus ke input (Ctrl+/)");
  }
});

onlyActive.addEventListener("change", () => {
  applyFilter();
  logEvent(`Filter: only active = ${onlyActive.checked}`);
});

clearDoneBtn.addEventListener("click", () => {
  const doneItems = todoList.querySelectorAll(".todo-item.done");
  doneItems.forEach((el) => el.remove());
  logEvent(`Todo: hapus semua yang selesai (${doneItems.length})`);
  applyFilter();
});

// Delegation: 1 listener untuk semua item (termasuk yang baru dibuat)
todoList.addEventListener("click", (e) => {
  const target = e.target;
  const item = target.closest(".todo-item");
  if (!item) return;

  // Hapus item
  if (target.matches("[data-action='delete']")) {
    const text = item.querySelector(".todo-text")?.textContent ?? "";
    item.remove();
    logEvent(`Todo: hapus item "${text}"`);
    return;
  }

  // Toggle selesai jika klik checkbox atau teks
  if (target.classList.contains("todo-check") || target.classList.contains("todo-text")) {
    item.classList.toggle("done");
    const checkbox = item.querySelector(".todo-check");
    if (checkbox) checkbox.checked = item.classList.contains("done");

    const text = item.querySelector(".todo-text")?.textContent ?? "";
    logEvent(`Todo: toggle "${text}" => ${item.classList.contains("done") ? "DONE" : "ACTIVE"}`);
    applyFilter();
  }
});

// ===================== 2) FORM (preventDefault + input events) =====================
const fbForm = document.getElementById("feedback-form");
const fbName = document.getElementById("fb-name");
const fbMessage = document.getElementById("fb-message");
const fbStatus = document.getElementById("fb-status");
const msgCount = document.getElementById("msg-count");
const fbReset = document.getElementById("fb-reset");

const MAX_MSG = 120;

function setStatus(text, type) {
  fbStatus.textContent = text;
  fbStatus.classList.remove("ok", "err");
  if (type) fbStatus.classList.add(type);
}

function updateMsgCounter() {
  const len = fbMessage.value.length;
  msgCount.textContent = String(len);

  if (len > MAX_MSG) {
    setStatus("Pesan melebihi 120 karakter. Kurangi ya.", "err");
  } else {
    // jangan hapus status sukses; hanya clear error ringan
    if (fbStatus.classList.contains("err")) setStatus("", null);
  }
}

fbMessage.addEventListener("input", () => {
  updateMsgCounter();
  logEvent(`Form: input message (len=${fbMessage.value.length})`);
});

fbName.addEventListener("input", () => {
  logEvent(`Form: input name (len=${fbName.value.length})`);
});

fbForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameVal = fbName.value.trim();
  const msgVal = fbMessage.value.trim();

  if (nameVal.length < 3) {
    setStatus("Nama minimal 3 karakter.", "err");
    logEvent("Form: submit gagal (nama < 3)");
    fbName.focus();
    return;
  }

  if (msgVal.length < 10) {
    setStatus("Pesan minimal 10 karakter.", "err");
    logEvent("Form: submit gagal (pesan < 10)");
    fbMessage.focus();
    return;
  }

  if (msgVal.length > MAX_MSG) {
    setStatus("Pesan maksimal 120 karakter.", "err");
    logEvent("Form: submit gagal (pesan > 120)");
    fbMessage.focus();
    return;
  }

  setStatus(`Terkirim! Terima kasih, ${nameVal}.`, "ok");
  logEvent(`Form: submit sukses (target=${e.target.id})`);
});

fbReset.addEventListener("click", () => {
  fbName.value = "";
  fbMessage.value = "";
  updateMsgCounter();
  setStatus("", null);
  fbName.focus();
  logEvent("Form: reset via tombol");
});

// Init counter
updateMsgCounter();

// ===================== 3) PROPAGATION LAB =====================
const stopPropCheckbox = document.getElementById("stop-prop");
const outerBox = document.getElementById("outer-box");
const middleBox = document.getElementById("middle-box");
const innerBtn = document.getElementById("inner-btn");

outerBox.addEventListener("click", (e) => {
  logEvent(`Propagation: OUTER click (target=${e.target.id || e.target.tagName})`);
});

middleBox.addEventListener("click", (e) => {
  logEvent(`Propagation: MIDDLE click (target=${e.target.id || e.target.tagName})`);
});

innerBtn.addEventListener("click", (e) => {
  logEvent(`Propagation: INNER click (target=${e.target.id || e.target.tagName})`);
  if (stopPropCheckbox.checked) {
    e.stopPropagation();
    logEvent("Propagation: stopPropagation() dipanggil di INNER");
  }
});

