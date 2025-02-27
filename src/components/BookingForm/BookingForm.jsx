import { Alert, Box, Button, Snackbar, TextField } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import css from './BookingForm.module.css';
import { useState } from 'react';

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
    console.log('Form data:', formData);
    setMessage('Booking successful!');
    setOpen(true);

    // Очищення форми після успішної відправки
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
          label="Name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          fullWidth
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Booking date"
            value={formData.date}
            onChange={handleDateChange}
            slotProps={{
              textField: {
                fullWidth: true,
                // InputProps: {
                //   endAdornment: <span className="calendarIconTransparent" />,
                // },
              },
            }}
          />
        </LocalizationProvider>
        <TextField
          label="Comment"
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
