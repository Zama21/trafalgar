import Typography from '../../Typography';
import { ErrorValidationProps } from './ErrorValidation.props';

function ErrorValidation({ children }: ErrorValidationProps) {
  return (
    <Typography variant="bodyS" style={{ color: 'tomato' }}>
      {children}
    </Typography>
  );
}

export default ErrorValidation;
