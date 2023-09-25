import React from 'react'
import Gallery from '../../components/gallery/Gallery';
import gallery1 from "../../assets/home/gallery/gallery1.jpeg";
import gallery2 from "../../assets/home/gallery/DSCN6759.JPG";
import gallery3 from "../../assets/home/gallery/DSCN6762.JPG";
import gallery4 from "../../assets/home/gallery/DSCN6785.JPG";
import gallery5 from "../../assets/home/gallery/DSCN6786.JPG";
import gallery6 from "../../assets/home/gallery/DSCN7045.JPG";
function GalleryPage() {
 
    const images=[
        {url:gallery1,
         label:"raj"
        },
        {url:gallery2,
        label:"raj2"
        },
        {url:gallery3,
          label:"raj3"
         },
         {url:gallery4,
         label:"raj4"
         }, {url:gallery5,
          label:"raj5"
         },
         {url:gallery6,
         label:"raj6"
         },
         {url:gallery1,
           label:"raj7"
          },
          {url:gallery2,
          label:"raj8"
          }
    ]

  return (
    <Gallery images={images} />
  )
}

export default GalleryPage;