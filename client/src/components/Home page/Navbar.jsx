import { Link } from "react-router-dom";
import ConsultancyPOP from './ConsultancyPOP'; // Adjust the path as per your project structure

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex',
      position: 'fixed',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '100px',
      fontFamily: 'DMSans, sans-serif',
      border: '2px solid red',
      backgroundImage: 'linear-gradient(#000424 55.25%, #2F3980 100%)',
      
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Shadow properties
      zIndex : 9999
    }}>
       
      <div className='flex-1 flex items-center justify-evenly h-full'>
      <div style={{ width: '12%', marginLeft: '120px', marginBottom: '10px', marginRight:'0px' }}>
          <img src="/images/logo.png" alt="Logo" className='logo' style={{ border: 'none' }} />
        </div>
      

        <div className='flex-1 flex items-center justify-evenly h-full p-5 w-[100%]' style={{ fontFamily: 'Poppins, sans-serif', marginTop: '10px', marginLeft :'0px' }}>
          <div className="nav-item" style={{ borderLeft: 'none', color:'white' }}>HOME</div>
          <div className="nav-item" style={{ borderLeft: 'none', color:'white' }}> <Link to="/events">EVENTS</Link></div>
          <div className="nav-item" style={{ borderLeft: 'none', color:'white' , color:'white'}}>PROJECTS</div>
          <div className="cursor-pointer" style={{ borderLeft: 'none' , color:'white'}}><Link to="/members">MEMBERS</Link></div>
          <div className="nav-item" style={{ borderLeft: 'none' , color:'white'}}>BLOGS</div>
          <div className="nav-item" style={{ borderLeft: 'none' , color:'white'}}>
    <a href="https://medium.com/@profnitt.club" target="blank_" style={{ textDecoration: 'none', color: 'inherit' }}>ARTICLES</a>
</div>

          <ConsultancyPOP />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;