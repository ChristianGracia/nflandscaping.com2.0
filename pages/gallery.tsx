import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { useState } from "react";
import ImageGrid from "../lib/components/imageGrid";
import PageHeader from "../lib/components/pageHeader";

const homeImpImages: string[] = [
  "gallery1aa.jpeg",
  "gallery5.JPG",
  "gallery6aa.JPG",
  "gallery7.JPG",
  "gallery8.JPG",
  "gallery9.JPG",
];
const landscapingImages: string[] = [
  "gallery1aa.jpeg",
  "gallery5.JPG",
  "gallery6aa.JPG",
  "gallery7.JPG",
  "gallery8.JPG",
  "gallery9.JPG",
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

  const galleryCards = ["Landscaping / Construction", "Home Improvement"];

  const renderGalleryCard = (title: string, index: number) => {
    return (
      <Card key={index} onClick={() => selectService(title)}>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </Card>
    );
  };

  const handleBackButton = () => {
    setShowLandscapingImages(false);
    setShowHomeImpImages(false);
    setShowSelectionButtons(true);
  };
  return (
    <div>
      <main>
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
        {showSelectionButtons ? (
          galleryCards.map((item: string, index: number) =>
            renderGalleryCard(item, index)
          )
        ) : (
          <Button onClick={handleBackButton}>Back</Button>
        )}
        {showHomeImpImages && (
          <ImageGrid
            prepend={"images/gallery/"}
            images={homeImpImages}
          ></ImageGrid>
        )}
        {showLandscapingImages && (
          <ImageGrid
            prepend={"images/gallery/"}
            images={landscapingImages}
          ></ImageGrid>
        )}
      </main>
    </div>
  );
};

export default Gallery;
