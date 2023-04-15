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
import { FC, forwardRef, ReactElement, Ref, useMemo } from 'react';
import { FullMenuDetail } from '../../../types/store';
import NoImage from '@assets/images/no_image_available.svg';
import CloseIcon from '@mui/icons-material/Close';
import MultipleStatusChip from '../MultipleStatusChip';
import { getIsActiveTime } from '../../../helpers/store';
import DiscountText from '../../../components/DiscountText';

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
  const isOnDiscounted = useMemo(
    () =>
      getIsActiveTime(
        data?.discountedTimePeriod?.begin,
        data?.discountedTimePeriod?.end
      ),
    [data?.discountedTimePeriod]
  );

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
          <Box position="absolute" left="1.6rem">
            <MultipleStatusChip data={data} />
          </Box>
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
              {isOnDiscounted ? (
                <DiscountText
                  fullPrice={data?.fullPrice}
                  discountPrice={
                    data?.fullPrice -
                    (data?.discountedPercent / 100) * data?.fullPrice
                  }
                />
              ) : (
                <Typography variant="body1" color="text.secondary">
                  price: {data?.fullPrice || '-'} Baht
                </Typography>
              )}
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
