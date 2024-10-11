import React from 'react'

const GoogleMap = () => {
  return (
    <div className='map-area'>
        <div className="maps">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.0883567214655!2d21.10733487703114!3d52.24177875679058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecdf32e0c2233%3A0xa280f2ff57a4a915!2sTrembowelska%205%2C%2004-301%20Warszawa!5e0!3m2!1sen!2spl!4v1728213311762!5m2!1sen!2spl" 
              width="600" 
              height="450" 
              style={{border: '0'}}
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </div>
  )
}

export default GoogleMap
