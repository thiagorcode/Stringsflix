import React from 'react';
import { FormFieldWrapper, Input, Label } from './style';

interface FormFieldDTO {
  value: string;
  onChange(): void;
  label: string;
  type: string;
  name: string;
  suggestions: string[];
}

const FormField: React.FC<FormFieldDTO> = ({
  label, type, name, value, onChange, suggestions,
}) => {
  const fieldId = `id_${name}`;
  const isTypeTextarea = type === 'textarea';
  const tag = isTypeTextarea ? 'textarea' : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          onChange={onChange}
        />
        <Label.Text>
          {label}
          :
        </Label.Text>
        {
          hasSuggestions && (
            <datalist id={`suggestionFor_${fieldId}`}>
              {
                suggestions.map((suggestion) => (
                  <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                    {suggestion}
                  </option>
                ))
              }
            </datalist>
          )
        }

      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
