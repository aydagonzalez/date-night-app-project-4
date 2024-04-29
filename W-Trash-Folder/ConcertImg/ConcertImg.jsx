

export default function ConcertImg({ images, idx }) {
    // const filteredImages = images.map(image => image.ratio === "16_9");
    // const filteredImages = images.filter(image => image.ratio === "16_9")
    
    // Choose the largest image based on width or a default one if no image is found
    // const imageToDisplay = filteredImages[0]

    return (
        <div>
            <h2>Concert Image</h2>
            <img src={images.url} alt="" />
            
            {/* Check if there is an image to display and then render it */}
            {/* {imageToDisplay && (
                <img src={imageToDisplay.url} alt="Concert event" style={{ maxWidth: '100%' }} />
            )} */}
        </div>
    );
}


    // function getImage() {
        // const filteredImages = images.filter(image => image.ratio === "16_9");
        // console.log("filteredImages:", filteredImages)
        // filteredImages.sort((a, b) => b.width - a.width);
        //    const goodImg = filteredImages[0]
        
        
        // const imageRatio =  images.ratio.find('3_2')
        // return filteredImages
        

    // }
    // function EventImage({ images }) {
    //     const bestImage = getImage(images);
    
    //     return (
    //         <images src={bestImage.url} alt="Event" />
    //     );
    // }



//     return (
//         <div>
//             <h2>Image HEre</h2>
//             {/* {imsagePic.url} */}
//             {/* {filteredImages} */}
//             {/* IMG<images src={filteredImages.url} alt="" /> */}

//         </div>
//     )
// }