import { render, screen } from '@testing-library/react';
import SignIn from "../../../../app/employe/sign-in/page" 
import AdminAuthForm from '@/components/auth/AdminAuthForm';

jest.mock('@/components/auth/AdminAuthForm', () => () => <div>Admin Auth Form</div>);

describe('SignIn Component', () => {
  it('should render AdminAuthForm component correctly', () => {
    render(<SignIn />);

    expect(screen.getByText('Admin Auth Form')).toBeInTheDocument();
  });

  it('should render with correct styles and layout', () => {
    const { container } = render(<SignIn />);

    expect(container.firstChild).toHaveClass('flex-center');
    expect(container.firstChild).toHaveClass('size-full');
    expect(container.firstChild).toHaveClass('max-sm:px-6');
    expect(container.firstChild).toHaveClass('flex-row');
  });
});
