import { IconButton, ImageList, ImageListItem, ImageListItemBar } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { ModalImage } from '../components/ModalImage';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchImages, fetchPage, deleteImage, fetchSortAlbum } from '../redux/store/actions';

export const ImagesPage: FC = () => {
  const [open, setOpen] = React.useState(false);
  const [termImage, setTermImage] = React.useState('');
  const [pageNum, setPageNum] = React.useState(1);
  const [albumNum, setAlbumNum] = React.useState(1);

  const { error, images, loading, page, limit, albumId } = useTypedSelector(
    (state) => state.images,
  );

  let dispatch = useDispatch();

  React.useEffect(() => {
    fetchImages(dispatch, page, limit, albumId);
  }, [dispatch, limit, page, albumId]);

  if (loading) {
    <h1>Load...</h1>;
  } else {
    <h1>{error}</h1>;
  }

  const handleCloseImage = () => setOpen(false);

  const delImage = (id: number) => deleteImage(dispatch, id);

  const pages = [1, 2, 3, 4, 5, 6, 7];

  const handlePageNum = (num: number) => {
    setPageNum(num);
  };

  React.useEffect(() => {
    fetchPage(dispatch, pageNum);
  }, [dispatch, pageNum]);

  const albums = [1, 2, 3, 4, 5];

  const handleAlbumNum = (num: number) => {
    setAlbumNum(num);
    setPageNum(1);
  };

  React.useEffect(() => {
    fetchSortAlbum(dispatch, albumNum);
  }, [dispatch, albumNum]);

  return (
    <div>
      <div className="album">
        <div className="album__title">AlbumId:</div>
        {albums.map((num) => (
          <div
            onClick={() => handleAlbumNum(num)}
            className={num === albumId ? 'album__number active' : 'album__number'}>
            {num}
          </div>
        ))}
      </div>
      <ModalImage imageItem={termImage} openModal={open} clModal={handleCloseImage} />

      <ImageList cols={4} rowHeight={150}>
        {images.map((image) => (
          <ImageListItem key={image.id}>
            <img
              onClick={() => {
                setTermImage(image.url);
                setOpen(true);
              }}
              srcSet={`${image.thumbnailUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={image.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={image.title}
              actionIcon={
                <IconButton>
                  <DeleteIcon onClick={() => delImage(image.id)} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <div className="pages">
        <div className="pages__title">Page</div>
        {pages.map((numP) => (
          <div
            onClick={() => handlePageNum(numP)}
            className={numP === page ? 'pages__number active' : 'pages__number'}>
            {numP}
          </div>
        ))}
      </div>
    </div>
  );
};
