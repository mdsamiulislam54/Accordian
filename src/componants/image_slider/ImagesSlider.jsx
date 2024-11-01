import React, { useEffect, useState } from 'react';

const ImagesSlider = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('images.json');
                const data = await response.json();
                setImages(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to load images');
                setLoading(false);
            }
        };
        fetchImages();
    }, []);



// const nextImage = () => {
//     if (startIndex + 1 < images.length) {
//         // setStartIndex((prevIndex) => prevIndex + 1);
//         // setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
//         setStartIndex(startIndex=== images.length? 0: startIndex +1)
//     }
// };

//     const prevImage = () => {
//         if (startIndex > 0) {
//             // setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//             // setStartIndex((prevIndex) => (prevIndex - 1) % images.length);
//             setStartIndex(startIndex=== 0 ?  images.length -1 : startIndex -1)

//         }
//     };
const nextImage = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const prevImage = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
};


    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className='w-[1200px] mx-auto relative mt-8 p-4 shadow-lg rounded-lg bg-gray-100 mt-5'>
            <div className='flex justify-center w-[1100px] space-x-4 overflow-hidden'>
                {images.slice(startIndex, startIndex + 4).map((image, index) => (
                    <img
                        key={index}
                        src={image.download_url}
                        alt={`Image ${index + 1}`}
                        className='w-[200px] h-[200px] object-cover rounded-lg transform transition-transform duration-300 hover:scale-105 shadow-md'
                    />
                ))}
            </div>
        
            <div className='flex justify-center mt-4'>
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`inline-block w-[10px] h-[10px] rounded-full mx-1 cursor-pointer transform transition-colors duration-300 ${
                            startIndex <= index && index < startIndex + 1
                                ? 'bg-blue-500'
                                : 'bg-gray-300'
                        }`}
                        onClick={()=> setStartIndex(index)}
                    ></span>
                ))}
            </div>
        
            <div className='absolute top-[50%] -translate-y-[50%] left-0 right-0 flex justify-between px-4'>
                <button
                    className={`text-2xl text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-600 transform transition-colors duration-300
                    }`}
                    onClick={prevImage}
                    disabled={startIndex === 0}
                >
                    ←
                </button>
                <button
                    className={`text-2xl text-white bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-blue-600 transform transition-colors duration-300 
                    }`}
                    onClick={nextImage}
                    disabled={startIndex + 4 >= images.length}
                >
                    →
                </button>
            </div>
        </div>
    );
};

export default ImagesSlider;
