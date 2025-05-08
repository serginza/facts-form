import { memo } from 'react';
import { Controller } from 'react-hook-form';
import type { Control, FieldValues, Path } from 'react-hook-form';
import { TextField, type TextFieldProps } from '@mui/material';
import { textFieldElementStyle } from './TextFieldElement.styles';

type TextFieldElementProps<T extends FieldValues> = Omit<
  TextFieldProps,
  'name'
> & {
  control: Control<T>;
  name: Path<T>;
};

function TextFieldElementProto<TFieldValues extends FieldValues>({
  control,
  name,
  required,
  disabled,
  onChange,
  onBlur,
  ...rest
}: TextFieldElementProps<TFieldValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { value, onChange: onChangeField, onBlur: onBlurField, ref },
        fieldState: { invalid, error },
      }) => (
        <TextField
          {...rest}
          ref={ref}
          name={name}
          value={value ?? ''}
          onChange={(e) => {
            onChangeField(e);
            if (onChange) onChange(e);
          }}
          onBlur={(e) => {
            onBlur?.(e);
            onBlurField();
          }}
          required={required}
          error={invalid}
          helperText={error?.message || rest.helperText}
          disabled={disabled}
          sx={textFieldElementStyle}
        />
      )}
    />
  );
}

export const TextFieldElement = memo(
  TextFieldElementProto
) as typeof TextFieldElementProto;
