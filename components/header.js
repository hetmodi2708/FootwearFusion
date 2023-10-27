const headerTemplate = document.createElement("template");

headerTemplate.innerHTML = `
<link rel="stylesheet" href="../styles/header.css"/>
  <header>
    <div>
      <span>Logo FootwearFusion</span> 
      <nav>
        <ul>
          <li><button id="home" type="button">Home</button></li>
          <li><button id="nws" type="button">Newsletter</button></li>
          <li><button id="about" type="button">About</button></li>
        </ul>
      </nav>
    </div>
  </header>

  <section id="newsletter" class="modal hidden">
    <div class="flex">
      <button class="close">&times;</button>
    </div>
    <div class="modal-content">
      <h2>Stay in touch</h2>
      <p>Subscribe to our newsletter to get latest information on the new trends and fashion
      </p>
      <form id="inputform">
        <div >
          <label><b>Username</b></label>
          <input type="email" placeholder="Enter Username" name="usrname" required>
          </div>
          <div>
          <label><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="psw" required>
          </div>
          <button type="submit" id="submitbutton" class="btn" onclick={onsubmithandler()}>Subscribe</button>
        </div>
      </form>
    </div>
  </section>
  
  <div class="overlay hidden"/>
  
`;

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: "closed" });

    shadowRoot.appendChild(headerTemplate.content);
    const homebutton = shadowRoot.getElementById("home");
    const aboutbutton = shadowRoot.getElementById("about");
    const modal = shadowRoot.getElementById("newsletter");
    const btn = shadowRoot.getElementById("nws");
    const closeBtn = shadowRoot.querySelector(".close");
    homebutton.onclick = function () {
      window.location.href = "../main/index.html";
    };
    aboutbutton.onclick = function () {
      window.location.href = "../main/about.html";
    };
    btn.onclick = function () {
      console.log("Newsletter button clicked");
      modal.style.display = "block";
    };
    closeBtn.onclick = function () {
      modal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }

      const inputform = shadowRoot.getElementById("inputform");
      inputform.onsubmit = function (event) {
        alert("You have been successfully added to our weekly newsletter!");
        modal.style.display = "none";
        event.preventDefault();
      };
    };
  }
}

customElements.define("header-component", Header);
