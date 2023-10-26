const footerTemplate = document.createElement("template");

footerTemplate.innerHTML = `
  <link rel="stylesheet" href="../styles/footer.css" />
  <footer>
    <ul class="social-row">
      <li><a href="index.html" id="facebook"><img src="../resources/facebook.png" width=3% /></a></li>
      <li><a href="work.html"><img src="../resources/instagram.png" width=3%/></a></li>
      <li><a href="contact.html"><img src="../resources/twitter.png" width=3%/></a></li>
    </ul>
    
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: "closed" });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define("footer-component", Footer);
