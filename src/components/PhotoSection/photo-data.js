import Gallery1 from '@assets/images/gallery/gallery-1.jpg';
import GalleryT1 from '@assets/images/gallery/gallery-t-1.jpg';
import Gallery2 from '@assets/images/gallery/gallery-2.jpg';
import GalleryT2 from '@assets/images/gallery/gallery-t-2.jpg';
import Gallery3 from '@assets/images/gallery/gallery-3.jpg';
import GalleryT3 from '@assets/images/gallery/gallery-t-3.jpg';
import Gallery4 from '@assets/images/gallery/gallery-4.jpg';
import GalleryT4 from '@assets/images/gallery/gallery-t-4.jpg';
import Gallery5 from '@assets/images/gallery/gallery-5.jpg';
import GalleryT5 from '@assets/images/gallery/gallery-t-5.jpg';
import Gallery6 from '@assets/images/gallery/gallery-6.jpg';
import GalleryT6 from '@assets/images/gallery/gallery-t-6.jpg';
import Gallery7 from '@assets/images/gallery/gallery-7.jpg';
import GalleryT7 from '@assets/images/gallery/gallery-t-7.jpg';
import Gallery8 from '@assets/images/gallery/gallery-8.jpg';
import GalleryT8 from '@assets/images/gallery/gallery-t-8.jpg';
import Gallery9 from '@assets/images/gallery/gallery-9.jpg';
import GalleryT9 from '@assets/images/gallery/gallery-t-9.jpg';
import Gallery10 from '@assets/images/gallery/gallery-10.jpg';
import GalleryT10 from '@assets/images/gallery/gallery-t-10.jpg';


const imagePairs = [
  { original: Gallery1, thumbnail: GalleryT1 },
  { original: Gallery6, thumbnail: GalleryT6 },
  { original: Gallery2, thumbnail: GalleryT2 },
  { original: Gallery7, thumbnail: GalleryT7 },
  { original: Gallery3, thumbnail: GalleryT3 },
  { original: Gallery8, thumbnail: GalleryT8 },
  { original: Gallery4, thumbnail: GalleryT4 },
  { original: Gallery9, thumbnail: GalleryT9 },
  { original: Gallery5, thumbnail: GalleryT5 },
  { original: Gallery10, thumbnail: GalleryT10 },
];

export const photos = imagePairs.map(({ original, thumbnail }) => ({ original, thumbnail }));
