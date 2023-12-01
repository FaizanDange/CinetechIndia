import React from 'react';
import '../Style/footer.css'; // Import the styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className="copyright">© 2023 CinetechIndia. All Rights Reserved.</p>

      <div className="social-icons">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://static.toiimg.com/thumb/resizemode-4,width-1280,height-720,msid-102075304/102075304.jpg" alt=""  />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtgmTcu_wxlIbjSnCnhfuq5CCTpXnJz5niA&usqp=CAU" alt="" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-4-n1JVCCDrNbOZbpajMhIkpf-d0Wx5xUg&usqp=CAU" alt=""  />
        </a>
        <a href="mailto:info@cinetechindia.com">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQ8raybl89XuZCw6gd9cKDlNj1MInu-_Qvg&usqp=CAU" alt=""  />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
