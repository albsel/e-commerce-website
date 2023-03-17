const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
      <div class="footer-content">
      <img src="img/light-logo.png" class="logo" alt="" />
      <div class="footer-ul-container">
        <ul class="category">
          <li class="category-title">men</li>
          <li><a href="#" class="footer-link">t-shirst</a></li>
          <li><a href="#" class="footer-link">sweatshirst</a></li>
          <li><a href="#" class="footer-link">shirst</a></li>
          <li><a href="#" class="footer-link">jeans</a></li>
          <li><a href="#" class="footer-link">trousers</a></li>
          <li><a href="#" class="footer-link">casuals</a></li>
          <li><a href="#" class="footer-link">formales</a></li>
          <li><a href="#" class="footer-link">sports</a></li>
          <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
          <li class="category-title">women</li>
          <li><a href="#" class="footer-link">t-shirst</a></li>
          <li><a href="#" class="footer-link">sweatshirst</a></li>
          <li><a href="#" class="footer-link">shirst</a></li>
          <li><a href="#" class="footer-link">jeans</a></li>
          <li><a href="#" class="footer-link">trousers</a></li>
          <li><a href="#" class="footer-link">casuals</a></li>
          <li><a href="#" class="footer-link">formales</a></li>
          <li><a href="#" class="footer-link">sports</a></li>
          <li><a href="#" class="footer-link">watch</a></li>
        </ul>
      </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos debitis
      cum enim dolorem, perspiciatis eligendi impedit fuga possimus hic rerum
      alias. Eligendi expedita qui nemo praesentium distinctio ex repellendus
      nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
      debitis cum enim dolorem, perspiciatis eligendi impedit fuga possimus
      hic rerum alias. Eligendi expedita qui nemo praesentium distinctio ex
      repellendus nesciunt? Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Quos debitis cum enim dolorem, perspiciatis eligendi impedit fuga
      possimus hic rerum alias. Eligendi expedita qui nemo praesentium
      distinctio ex repellendus nesciunt?
    </p>
    <p class="info">support emails - help@clothing.com</p>
    <p class="info">telephone - 0173 2458 7854</p>
    <div class="footer-social-container">
      <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
      </div>
      <div>
        <a href="#" class="social-link">linkedin</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">instagram</a>
      </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
  `;
};
createFooter();
