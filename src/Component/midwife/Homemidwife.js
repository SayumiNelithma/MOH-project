import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

function Homemidwifes() {
  return (
    <div className="fluid">
  <Header title="Midwife Home" />
  <div className="homebrief">
    <div className="col-md-3">
      <Sidebar />
    </div>
    <div className="col-md-9">
      <div className="container" style={{ background: 'linear-gradient(to bottom, #d18923, #ffffff)', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#4d4d4d' }}>Welcome to Midwife Home</h2>

        {/* Managing Newly Married Couples */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#0066cc' }}>Managing Newly Married Couples</h3>
          <p>
            As a midwife, you play an important role in supporting newly married couples as they embark on their journey together. Here are some key aspects of managing newly married couples:
          </p>
          <ul>
            <li>Provide counseling and education on family planning methods.</li>
            <li>Offer advice on building healthy relationships.</li>
            <li>Monitor the health and well-being of both partners.</li>
            <li>Coordinate with healthcare professionals for any necessary medical interventions.</li>
          </ul>
        </section>

        {/* Managing Pregnant Mothers */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#0066cc' }}>Managing Pregnant Mothers</h3>
          <p>
            Supporting pregnant mothers throughout their pregnancy is essential for ensuring a safe and healthy delivery. Here's how you can effectively manage pregnant mothers:
          </p>
          <ul>
            <li>Provide prenatal care, including regular check-ups and screenings.</li>
            <li>Offer guidance on nutrition and exercise during pregnancy.</li>
            <li>Address any concerns or complications that may arise during pregnancy.</li>
            <li>Prepare expectant mothers for labor and delivery.</li>
          </ul>
        </section>

        {/* Managing Newborn Babies */}
        <section>
          <h3 style={{ color: '#0066cc' }}>Managing Newborn Babies</h3>
          <p>
            Welcoming a newborn baby into the world is a joyous occasion, and as a midwife, you play a vital role in ensuring the health and well-being of both the baby and the mother. Here are some important aspects of managing newborn babies:
          </p>
          <ul>
            <li>Provide postnatal care for the mother and newborn baby.</li>
            <li>Assist with breastfeeding and newborn care techniques.</li>
            <li>Monitor the baby's growth and development in the early stages of life.</li>
            <li>Offer support and guidance to new parents as they adjust to parenthood.</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</div>

  );
}

export default Homemidwifes;
