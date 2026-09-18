document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".year").forEach(el => el.textContent = new Date().getFullYear());

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  const dateInput = document.querySelector("#date");
  if (dateInput) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  const form = document.querySelector("#orderForm");
  const message = document.querySelector("#formMessage");
  if (form && message) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const name = document.querySelector("#name").value.trim();
      const orderType = document.querySelector("#orderType").value;
      message.textContent = `Thank you, ${name}! Your ${orderType.toLowerCase()} enquiry has been captured for this demonstration. We will contact you using the details provided.`;
      form.reset();
      if (dateInput) dateInput.min = new Date().toISOString().split("T")[0];
    });
  }
});
