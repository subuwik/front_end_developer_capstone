import { getAvailableTimes, validateForm } from './components/BookingForm';

describe('getAvailableTimes', () => {
  test('returns empty array when no date is provided', () => {
    const result = getAvailableTimes('');
    expect(result).toEqual([]);
  });

  test('returns 5 time slots for a weekday', () => {
    const result = getAvailableTimes('2025-01-06');
    expect(result).toHaveLength(5);
  });

  test('returns 8 time slots for a weekend', () => {
    const result = getAvailableTimes('2025-01-04');
    expect(result).toHaveLength(8);
  });

  test('returns times as strings', () => {
    const result = getAvailableTimes('2025-01-06');
    result.forEach((time) => {
      expect(typeof time).toBe('string');
    });
  });
});

// Tests for validateForm


function makeValidForm() {
  return {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@example.com',
    date: '2030-06-15',
    time: '18:00',
    guests: '2',
    occasion: '',
    specialRequests: '',
  };
}

describe('validateForm', () => {
  test('returns no errors for a valid form', () => {
    const errors = validateForm(makeValidForm());
    expect(Object.keys(errors)).toHaveLength(0);
  });

  test('returns error when first name is empty', () => {
    const formData = makeValidForm();
    formData.firstName = '';
    const errors = validateForm(formData);
    expect(errors.firstName).toBeDefined();
  });

  test('returns error when last name is empty', () => {
    const formData = makeValidForm();
    formData.lastName = '';
    const errors = validateForm(formData);
    expect(errors.lastName).toBeDefined();
  });

  test('returns error when email is empty', () => {
    const formData = makeValidForm();
    formData.email = '';
    const errors = validateForm(formData);
    expect(errors.email).toBeDefined();
  });

  test('returns error for invalid email format', () => {
    const formData = makeValidForm();
    formData.email = 'not-an-email';
    const errors = validateForm(formData);
    expect(errors.email).toBeDefined();
  });

  test('returns error when date is empty', () => {
    const formData = makeValidForm();
    formData.date = '';
    const errors = validateForm(formData);
    expect(errors.date).toBeDefined();
  });

  test('returns error when time is empty', () => {
    const formData = makeValidForm();
    formData.time = '';
    const errors = validateForm(formData);
    expect(errors.time).toBeDefined();
  });

  test('returns error when guests field is empty', () => {
    const formData = makeValidForm();
    formData.guests = '';
    const errors = validateForm(formData);
    expect(errors.guests).toBeDefined();
  });

  test('returns error when guests is more than 10', () => {
    const formData = makeValidForm();
    formData.guests = '11';
    const errors = validateForm(formData);
    expect(errors.guests).toBeDefined();
  });

  test('returns error when guests is 0', () => {
    const formData = makeValidForm();
    formData.guests = '0';
    const errors = validateForm(formData);
    expect(errors.guests).toBeDefined();
  });

  test('returns multiple errors when multiple fields are invalid', () => {
    const formData = {
      firstName: '',
      lastName: '',
      email: 'bad-email',
      date: '',
      time: '',
      guests: '',
      occasion: '',
      specialRequests: '',
    };
    const errors = validateForm(formData);
    expect(Object.keys(errors).length).toBeGreaterThan(3);
  });
});
