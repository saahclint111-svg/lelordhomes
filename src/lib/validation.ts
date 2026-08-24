export type FieldError = { field: string; message: string }

export function validateRequired(value: string, label: string): FieldError | null {
  if (!value.trim()) return { field: label, message: `${label} is required` }
  return null
}

export function validateEmail(value: string): FieldError | null {
  if (!value.trim()) return { field: 'Email', message: 'Email is required' }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return { field: 'Email', message: 'Please enter a valid email address' }
  return null
}

export function validatePhone(value: string): FieldError | null {
  if (!value.trim()) return null
  if (!/^[\d\s\+\-\(\)]{7,}$/.test(value)) return { field: 'Telephone', message: 'Please enter a valid telephone number' }
  return null
}
