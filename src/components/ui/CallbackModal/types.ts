export interface CallbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface FormData {
  name: string;
  phone: string;
  consent: boolean;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  consent?: string;
}

export interface FormInputProps {
  id: string;
  name: string;
  type: 'text' | 'tel';
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface CheckboxFieldProps {
  checked: boolean;
  error?: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
