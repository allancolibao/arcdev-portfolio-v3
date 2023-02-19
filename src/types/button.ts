export type ButtonProps = {
    type?: 'submit' | 'reset' | 'button';
    label?: string;
    icon?: JSX.Element;
    className?: string;
    isLoading?: boolean;
    onClick?: () => void;
    loadingText?: string;
}
