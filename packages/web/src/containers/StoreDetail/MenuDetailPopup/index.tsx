import {
  Box,
  CardMedia,
  Divider,
  Skeleton,
  Typography,
  useTheme,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FC, forwardRef, ReactElement, Ref } from 'react';
import { FullMenuDetail } from '../../../types/store';
import NoImage from '@assets/images/no_image_available.svg';
import CloseIcon from '@mui/icons-material/Close';
import MultipleStatusChip from '../MultipleStatusChip';

interface MenuDetailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  data?: FullMenuDetail;
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const MenuDetailPopup: FC<MenuDetailPopupProps> = ({
  isOpen,
  onClose,
  data,
}) => {
  const theme = useTheme();
  if (!data) {
    return (
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="menu-dialog"
      >
        <Skeleton />
      </Dialog>
    );
  }

  return (
    <div>
      <Dialog
        open={isOpen}
        fullWidth
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="menu-dialog"
      >
        <Box position="relative">
          <CloseIcon
            onClick={onClose}
            sx={{
              fontSize: '3rem',
              position: 'absolute',
              right: '1rem',
              top: '1rem',
              cursor: 'pointer',
              color: theme.palette.common.white,
            }}
          />
          <CardMedia
            component="img"
            image={data?.largeImage || NoImage}
            alt={`image-popup-${data.id}`}
            sx={{
              width: '100%',
              maxHeight: { xs: '20rem', md: '40rem' },
              objectFit: 'cover',
            }}
          />
          <DialogContent>
            {data?.name && (
              <Typography variant="h3" textAlign="center">
                {data.name}
              </Typography>
            )}
            <Divider />
            <Box
              width="100%"
              display="inline-flex"
              justifyContent="space-between"
              pt={2}
            >
              {data?.fullPrice && (
                <Typography variant="h5">{data.fullPrice} Baht</Typography>
              )}
              <Box>
                <MultipleStatusChip data={data} />
              </Box>
            </Box>
            {(data?.options || []).length > 0 && (
              <Box
                width="100%"
                display="block"
                justifyContent="space-between"
                pt={4}
              >
                {data?.options.map(({ label, choices }) => (
                  <>
                    {data?.name && (
                      <Typography variant="h5">{label}</Typography>
                    )}
                    <Divider />
                    <ul>
                      {choices.map(({ label }) => (
                        <li>
                          <Typography variant="body1" pt={2}>
                            {label}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                ))}
              </Box>
            )}
          </DialogContent>
        </Box>
      </Dialog>
    </div>
  );
};

export default MenuDetailPopup;
