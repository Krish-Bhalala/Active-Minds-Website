const footer=`
   <footer id = "contact">
        <div class="footer__container">
           
                <div class="footer__logo">
                    <img src="../public/assets/activeMindLogoOutlined.png" alt="logo">
                </div>
              
                
            
            
                <div class="footer__nav">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="../public/index.html"> - Back to Homepage.</a></li>
                        <li><a href="../public/events.html">- Upcoming events and workshops.</a> </li>
                        <li><a href="../public/teams.html">- Meet our dedicated team.</a> </li>
                        <li><a href="../public/resources.html">- Explore helpful resources.</a> </li>
                    </ul>
                    
                </div>
                <div class="contact-wrapper">
                    <div class="footer__contact">
                        <h4>Contact Us</h4>
                        <a href="mailto:activemindsumanitoba@gmail.com">Email: activemindsumanitoba@gmail.com</a>
                    </div>
                    <div class="footer__social">
                        <h4>Follow Us</h4>
                        <div class="social-icons">
                            <a href="#"><i  id ="insta"><img src="../extra assets/instagram.png" alt=""></i></a>
                            <a href="#"><i  id ="discord"><img src="../extra assets/discord.png" alt=""></i></a>
                            <a href="#"><i  id ="telegram"><img src="../extra assets/telegram.png" alt=""></i></a>
                            <a href="#"><i  id ="linktree"><img src="../extra assets/linktree.png" alt=""></i></a>

                        </div>
                    </div>
                </div>
           
        </div>
        <div class="footer__bottom">
            <p>© 2024 All Rights Reserved</p>
        </div>
    </footer>`;
document.addEventListener('DOMContentLoaded', () => {
    const footerContainer = document.querySelector('.footer-container');
    footerContainer.innerHTML = footer;
});