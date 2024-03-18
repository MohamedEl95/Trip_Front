import React from 'react';
import DialogAtom from '../atoms/dialog';
import TypographyAtom from '../atoms/typography';
import ButtonAtom from '../atoms/button';
import { useTranslations } from '../../hooks/useTranslation';

interface ConfirmActionProps {
  open: boolean;
  title: string;
  content: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmAction: React.FC<ConfirmActionProps> = ({ open, title, content, onConfirm, onCancel }) => {
  const { translations } = useTranslations();

  return (
    <DialogAtom open={open} title={title} onClose={onCancel}>
      <TypographyAtom color="secondary">{content}</TypographyAtom>
      <ButtonAtom variant="contained" color="error" onClick={onConfirm}>
      <TypographyAtom color="secondary"> {translations.confirm}</TypographyAtom>

      </ButtonAtom>
      <ButtonAtom variant="outlined" color="secondary" onClick={onCancel}>
      <TypographyAtom color="secondary"> {translations.cancel}</TypographyAtom>

      </ButtonAtom>
    </DialogAtom>
  );
};

export default ConfirmAction;
