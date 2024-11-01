import { useState } from "react";

const Color = () => {
  const [hexcolor, setHexcolor] = useState('000000'); // Initialize with a default color
  const  [rgbcolor, setRgbcolor] = useState('0,0,0');
  const [hextorgb , setHextorgb] = useState('0,0,0');
  const [rgbTohex , setrgbTohex] = useState('0,0,0');
   // Initialize with
  const [isHex, setIsHex] = useState(true);

  const hexcolorGenerator = () => {
    const color = Math.floor(Math.random() * 16777215).toString(16);
    const  hexcolor = '#' + color;
    setHexcolor(hexcolor.padStart(6, '0'));
    setIsHex(true)
    hexTorgb(hexcolor) // Ensure it's always 6 characters
  };

const  rgbcolorGenerator = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbcolor = `rgb(${r},${g},${b})`
    rgbToHex(r,g,b)
    setRgbcolor(rgbcolor);
    setIsHex(false)
   
}
const hexTorgb = (hexColor) => {
  hexColor = hexColor.replace(/^#/, '');
  const r = parseInt(hexColor.slice(0, 2), 16);
  const g = parseInt(hexColor.slice(2, 4), 16);
  const b = parseInt(hexColor.slice(4, 6), 16);
  setHextorgb(`rgb(${r}, ${g}, ${b})`);
}

const rgbToHex = (r, g, b) => {
  // Ensure that the values are within the range of 0 to 255
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // Convert to hex and pad with zeros if necessary
  const toHex = (c) => c.toString(16).padStart(2, '0');

  // Combine the hex values
  setrgbTohex( `#${toHex(r)}${toHex(g)}${toHex(b)}`);
}



  return (
    <div className="mt-10">
      <div>
        <h1 className="text-4xl">Color Game & HEX & RGB</h1>
       
        <button onClick={hexcolorGenerator} className="py-2 px-5 bg-gray-400 rounded-md mx-4 mt-3 text-white">
          HEX CODE
        </button>
        <button onClick={rgbcolorGenerator} className="py-2 px-5 bg-gray-400 rounded-md mx-4 text-white">RGB CODE</button>
        <div style={{backgroundColor: isHex? hexcolor: rgbcolor }} className={`w-[1000px] h-[400px] border-2 mx-auto mt-5 rounded-lg`}>
        <h1 className="text-4xl mt-10">Hex Code: {isHex ? hexcolor : rgbTohex}</h1>
        <h1 className="text-4xl mt-10">RGB Code: {isHex ? hextorgb : rgbcolor}</h1>
        </div>
      </div>
    </div>
  );
};

export default Color;
