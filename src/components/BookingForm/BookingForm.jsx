import React, { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb'; // Локаль для правильного порядку днів

import { Alert, Box, Button, Snackbar, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import css from './BookingForm.module.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: null,
    comment: '',
  });

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = newDate => {
    setFormData(prev => ({
      ...prev,
      date: newDate,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setMessage('Booking successful!');
    setOpen(true);

    setFormData({
      name: '',
      email: '',
      date: null,
      comment: '',
    });
  };

  return (
    <div className={css.formContainer}>
      <h2>Book your car now</h2>
      <p>Stay connected! We are always ready to help you.</p>

      <Box component="form" onSubmit={handleSubmit} className={css.form}>
        <TextField
          name="name"
          required
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="email"
          type="email"
          required
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en-gb">
          <DatePicker
            value={formData.date}
            onChange={handleDateChange}
            minDate={dayjs()}
            format="ddd DD-MM-YYYY"
            slotProps={{
              textField: {
                fullWidth: true,
                placeholder: 'Booking date',
              },
            }}
          />
        </LocalizationProvider>

        <TextField
          placeholder="Comment"
          name="comment"
          multiline
          rows={3}
          value={formData.comment}
          onChange={handleChange}
          fullWidth
        />
        <Button type="submit" sx={{ width: '156px', marginTop: '8px' }}>
          Send
        </Button>
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert
          severity={message === 'Booking successful!' ? 'success' : 'warning'}
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default BookingForm;
