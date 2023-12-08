import Button from "@mui/material/Button";
import type { NextPage } from "next";
import { useState } from "react";
import ImageGrid from "../lib/components/imageGrid";
import PageHeader from "../lib/components/pageHeader";
import GallerySectionCard from "../lib/components/gallerySectionCard";
import Box from "@mui/material/Box";
import Main from "../lib/components/ui/main";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
interface GalleryItem {
  title: string;
  imageUrl: string;
}

const homeImpImages: string[] = [
  // "gallery6a.JPG",
  // "gallery1a.JPG",
  // "gallery2.JPG",
  // "gallery4.JPG",
  // "gallery4a.JPG",
  // "gallery11.JPG",
  // "gallery16.JPG",
  // "gallery3.JPG",
];
const landscapingImages: string[] = [
  'lc1.jpeg',
  'lc2.jpeg',
  'lc3.jpeg',
  'lc4.jpeg',
  'lc5.jpeg',
  'lc6.jpeg',
  'lc7.jpeg',
  'lc8.jpeg',
  'lc9.jpeg',
  'lc10.jpeg',
  'lc11.jpeg',
  'lc12.jpeg',
  'lc13.jpeg',
  'lc14.jpeg',
  'lc15.jpeg',
  'lc16.jpeg',
  'lc17.jpeg',
  'lc18.jpeg',
  'lc18.jpeg',
  'lc19.jpeg',
  'lc20.JPG',
  'lc21.jpeg',
  'lc22.jpeg',
  'lc23.jpeg',
  'lc24.jpeg',
  'lc25.jpg',
  'lc26.jpg',
  'lc27.jpg',
  'lc28.jpg',
  'lc29.jpeg',
  'lc30.jpeg',
  'lc31.jpeg',
  'lc32.jpeg',
  'lc33.jpeg',
  'lc34.jpeg',
  'lc35.jpeg',
  'lc36.jpeg',
  'lc37.jpeg',


  // "gallery1aa.jpeg",
  // "gallery5.JPG",
  // "gallery6aa.JPG",
  // "gallery7.JPG",
  // "gallery8.JPG",
  // "gallery9.JPG",
  // "gallery11.PNG",
  // "gallery12.PNG",
  // "gallery13.JPG",
  // "gallery14.JPG",
  // "gallery17.JPG",
  // "gallery18.JPG",
  // "gallery20.JPG",
  // "gallery21.JPG",
  // "gallery15.JPG",
  // "gallery10.JPG",
  // "gallery22.JPG",
  // "gallery23.JPG",
  // "gallery24.jpeg",
  // "gallery25.JPG",
  // "gallery34.jpeg",
];

const galleryItems: GalleryItem[] = [
  {
    title: "Landscaping / Construction",
    imageUrl: "GalleryImageL.jpg",
  },
  {
    title: "Home Improvement",
    imageUrl: "GalleryImageHI.jpg",
  },
];

const Gallery: NextPage = () => {
  const [showHomeImpImages, setShowHomeImpImages] = useState<boolean>(false);
  const [showLandscapingImages, setShowLandscapingImages] =
    useState<boolean>(false);
  const [showSelectionButtons, setShowSelectionButtons] =
    useState<boolean>(true);

  const selectService = (title: string) => {
    if (title === "Landscaping / Construction") {
      setShowLandscapingImages(true);
    } else if (title === "Home Improvement") {
      setShowHomeImpImages(true);
    }
    setShowSelectionButtons(false);
  };

  const renderGallerySectionCard = (item: GalleryItem, index: number) => {
    return (
      <GallerySectionCard
        key={index}
        handleClick={() => selectService(item.title)}
        item={item}
      />
    );
  };

  const handleBackButton = () => {
    setShowLandscapingImages(false);
    setShowHomeImpImages(false);
    setShowSelectionButtons(true);
  };
  return (
    <Main>
      <div>
        <PageHeader
          title={
            showSelectionButtons
              ? "Before & After"
              : showHomeImpImages
              ? "Home Improvement"
              : showLandscapingImages
              ? "Landscaping / Construction"
              : ""
          }
        />
        <Box sx={{ paddingBottom: 10 }}>
          {showSelectionButtons ? (
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              flexWrap="wrap"
            >
              {galleryItems.map((item: GalleryItem, index: number) =>
                renderGallerySectionCard(item, index)
              )}
            </Box>
          ) : (
            <Button onClick={handleBackButton}>
              <ArrowBackIosIcon />
              Back
            </Button>
          )}
          {showHomeImpImages && (
            <ImageGrid
              prepend={"images/gallery-images/"}
              images={homeImpImages}
            ></ImageGrid>
          )}
          {showLandscapingImages && (
            <ImageGrid
              prepend={"images/gallery-images/"}
              images={landscapingImages}
            ></ImageGrid>
          )}
        </Box>
      </div>
    </Main>
  );
};

export default Gallery;
