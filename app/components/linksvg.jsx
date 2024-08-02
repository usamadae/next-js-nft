import Image from 'next/image';

const Linksvg = () => {
  return (
    <div style={{ width: '30px', height: '30px' }}>
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD0UlEQVR4nO2ZW4xOVxTHd4uk4sVdX0Qj7pfBlFGZMYbIhEaEJpVO4hJEJY1Kp7TjXtdxGZm4TEMkHoTQeiV94UHw1rcKEYJEa2gVRYcxLj/ZY33Jtq195hvO+WYk5/c281/7nPXf17XPZ0xKSkpKyjsAfAQMAyYCBUB78z4B9AcOAg95nXrgF2Cgae0A5UAD0dQBM1oyya+BWuACMFLRq8iep8CUljDxvZfIGU+vDCR8EzgFXFe0/4CPc2niByWJs46+SdHvAjOdmA+Bb2SduGzJlYllgTleKPqGgIn8wPO+9WLP5cLESiXJ/4ES0dcHTHwa8cweXnx90iZWK0na7bRY9HXNNWEBOnptGkxSAGuVJB8ARRH6PW0n8wGmee0umiQI9LSdTuNErwjsPgVZPLst8LvXtiYJE5WBJD8TfU2UCaCzLOY5QBvl+bu8ti+yGcXmmtgamC6ZJFcFTIwWvSdw2dF2eM/forQ/GreJqsDCHRWxe7kmegFXPP2883xtd7MHZJe4DHwAVCsvuZPZfYAVin4fGCP6J8A1JWZbxEjaThoRp4kdTYzE0sDCL3ZG4qoScxRoJwWk1gkFcZrYGTDRuPiAJU3sXqGR+FV2p8VRnRCXid3KS/4B8gIFom+iL/CXEnNETMyXHckva0riNFGjJPA3MLQJEyXOpUkzcVhMzAWee9ojYEKcJn4OmBgiMdqcrvNM3FBi9kt1O1sxUQ98HosJSWKvkkBt5toZGAlbW40VfQhwS4nZJya+Ap4pJibFacIvnZGkBon+XWAkxos+UC5IIRNfyI3PpQGYGqeJPOUObed4P+f6GrWwhwO3lZgama5Tlefbv6fHZkISOe69xCbVR7R+wJOINZEP/KuY2CkmJis3PjsyX8ZtYqiSxGRH3x4xnUbKueJTLSbst6rHnmbXSFmsJgL3hpPGATjh6Qvk/wVSMPpUiV4ipl3sbjXbJAFw1nvZLE//zdPtzlYWmE6bpU2h8uHNmpiXiAmLbK8uvY1DoKrV2Cjxo6VWcrEn+EKTJLy5r3fw9K6B3ndZ6yz8e4qJRYmasCi918142Ht4wIxNcrnEDAvElJtcAFzyXlwaiOsG/GQ3A1lXe537yGApKH1+zIkJi9RALgdMM5Aq119nllUmlwDTlcOqKMu2AwJV7rrkM/eQOui8Uu1GmpHaSTtHKk1Lwasy4rkyModE6w50khLdXohOo9N4GLYo6J8/m0P8H9HeBqmNKpSRaQo7chWmtQGUAn9kaeJY5g7fKuHV6EwB9tjfJuSgsz3/p/yytDpz9U1JSUkxSfISFWwSlAiiK+IAAAAASUVORK5CYII="
        alt="Pattern Image"
        layout="responsive"
        width={50}
        height={50}
      />
    </div>
  );
};

export default Linksvg;