import {
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
  lazy,
  Suspense,
  memo,
} from "react";
import {
  Box,
  ImageList,
  ImageListItem,
  Dialog,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataContext } from "../../../Components/Context/DataContext";
import Header from "../../../Hooks/Header";
import { useTranslation } from "react-i18next";
import image from "../../../assets/images/Frame.avif";
import imageOne from "../../../assets/images/gallery/1.avif";
import imageTwo from "../../../assets/images/gallery/19.avif";
import imageThree from "../../../assets/images/gallery/7.avif";
import imageFour from "../../../assets/images/gallery/25.avif";
import imageFive from "../../../assets/images/gallery/5.avif";
import imageSix from "../../../assets/images/gallery/15.avif";
import imageSeven from "../../../assets/images/gallery/10.avif";
import imageEight from "../../../assets/images/gallery/12.avif";
const CloseIcon = lazy(() => import("@mui/icons-material/Close"));
const ArrowBack = lazy(() => import("@mui/icons-material/ArrowBackIosNew"));
const ArrowForward = lazy(() => import("@mui/icons-material/ArrowForwardIos"));
const images = [
  {
    src: imageOne,
    original: imageOne,
    alt: "Gallery image 1",
    width: 320,
    height: 174,
    tags: [
      { value: "Nature", title: "Nature" },
      { value: "Flora", title: "Flora" },
    ],
  },
  {
    src: imageTwo,
    original: imageTwo,
    alt: "Gallery image 2",
    width: 320,
    height: 212,
  },
  {
    src: imageThree,
    original: imageThree,
    alt: "Gallery image 3",
    width: 320,
    height: 212,
  },
  {
    src: imageFour,
    original: imageFour,
    alt: "Gallery image 4",
    width: 320,
    height: 213,
  },
  {
    src: imageFive,
    original: imageFive,
    alt: "Gallery image 5",
    width: 320,
    height: 183,
  },
  {
    src: imageSix,
    original: imageSix,
    alt: "Gallery image 6",
    width: 240,
    height: 320,
    tags: [{ value: "Nature", title: "Nature" }],
  },
  {
    src: imageSeven,
    original: imageSeven,
    alt: "Gallery image 7",
    width: 320,
    height: 190,
  },
  {
    src: imageEight,
    original: imageEight,
    alt: "Gallery image 8",
    width: 320,
    height: 148,
    tags: [{ value: "People", title: "People" }],
  },
];

function MyGallery() {
  const [openIndex, setOpenIndex] = useState(null);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const cols = isXs ? 1 : isSm ? 2 : 4;
  const { locale } = useContext(DataContext);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [i18n, locale]);
  const handleOpen = useCallback((idx) => setOpenIndex(idx), []);
  const handleClose = useCallback(() => setOpenIndex(null), []);
  const handlePrev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? null : (i + images.length - 1) % images.length
    );
  }, []);
  const handleNext = useCallback(() => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, []);

  const currentImage = useMemo(
    () => (openIndex !== null ? images[openIndex] : null),
    [openIndex]
  );

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          py: 2,
          backgroundRepeat: "no-repeat",
        }}
        aria-labelledby="about-heading">
        <Header
          firstText={t("Our gallery")}
          secondText={t("Get to know our farm")}
          thirdText=""
        />
      </Box>
      <Box my={8}>
        <ImageList cols={cols} gap={6}>
          {images.map((img, idx) => (
            <ImageListItem
              key={img.src}
              onClick={() => handleOpen(idx)}
              sx={{ cursor: "pointer", borderRadius: 1, overflow: "hidden" }}>
              <img
                crossOrigin="anonymous"
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                width={img.width}
                height={img.height}
                style={{ width: "100%", display: "block" }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Dialog
          open={openIndex !== null}
          onClose={handleClose}
          fullWidth
          maxWidth="md"
          aria-labelledby="gallery-dialog"
          PaperProps={{
            sx: {
              background: "transparent",
              boxShadow: "none",
            },
          }}>
          {currentImage && (
            <>
              <Suspense fallback={<IconButton />}>
                <IconButton
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "common.white",
                    bgcolor: "rgba(0,0,0,0.4)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                  }}
                  aria-label={t("Close gallery")}>
                  <CloseIcon />
                </IconButton>
              </Suspense>

              <Suspense fallback={<IconButton />}>
                <IconButton
                  onClick={handlePrev}
                  sx={{
                    position: "absolute",
                    left: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "common.white",
                    bgcolor: "rgba(0,0,0,0.4)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                  }}
                  aria-label={t("Previous image")}>
                  <ArrowBack />
                </IconButton>
              </Suspense>

              <Suspense fallback={<IconButton />}>
                <IconButton
                  onClick={handleNext}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "common.white",
                    bgcolor: "rgba(0,0,0,0.4)",
                    "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                  }}
                  aria-label={t("Next image")}>
                  <ArrowForward />
                </IconButton>
              </Suspense>

              <DialogContent
                id="gallery-dialog"
                sx={{
                  p: 0,
                  display: "flex",
                  justifyContent: "center",
                  bgcolor: "rgba(0,0,0,0.8)",
                }}>
                <Box
                  component="img"
                  src={currentImage.original}
                  alt={currentImage.alt}
                  loading="lazy"
                  decoding="async"
                  sx={{
                    maxWidth: "100%",
                    maxHeight: `calc(100vh - ${theme.spacing(10)})`,
                  }}
                />
              </DialogContent>
            </>
          )}
        </Dialog>
      </Box>
    </>
  );
}

export default memo(MyGallery);
