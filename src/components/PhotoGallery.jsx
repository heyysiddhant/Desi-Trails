const photos = [
    "/src/assets/slide1.jpg",
    "/src/assets/slide2.jpg",
    "/src/assets/slide3.jpg",
    "/src/assets/gallery4.jpg",
    "/src/assets/gallery5.jpg",
    "/src/assets/gallery6.jpg",
    "/src/assets/gallery7.jpg",
    "/src/assets/gallery8.jpg",
  ];
  
  const PhotoGallery = () => {
    return (

        
        <section id="Photogallery" className="py-20 bg-blue-50 px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800">
          Follow Us on Instagram
        </h2>
      
        <div className="flex justify-center">
          <iframe
            src="https://15fc54009156487eafdd60aa696e548c.elf.site"
            className="w-full md:w-3/4 h-[600px] border-none"
            allowtransparency="true"
          ></iframe>
        </div>
      </section>


     



    );
  };
  
  export default PhotoGallery;