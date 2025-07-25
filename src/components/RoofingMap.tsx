const RoofingMap = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Find Us in Stantonbury
          </h2>
          <p className="text-lg text-gray-600">
            Proudly serving Milton Keynes and surrounding areas
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2465.123456789!2d-0.7894568!3d52.0654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDAzJzU1LjYiTiAwwrA0NycyMi4wIlc!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%" 
            height="400" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Storm Line Roofing Stantonbury Location"
          ></iframe>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            <strong>Address:</strong> 45 Parklands, Stantonbury, Milton Keynes
          </p>
        </div>
      </div>
    </section>
  );
};

export default RoofingMap;