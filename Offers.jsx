import React from 'react';
import DownloadDoneOutlinedIcon from '@mui/icons-material/DownloadDoneOutlined';
import { IconButton } from '@mui/material';

const OrderConfirmedPage = () => {
 return (
    <div style={{ textAlign: 'center',marginTop:'210px' }}>
      <h2>Order Confirmed!</h2>
      <p>Your order has been successfully placed.<IconButton size="large">
  <DownloadDoneOutlinedIcon />
</IconButton></p>
     
    </div>
  );
};

export default OrderConfirmedPage;
