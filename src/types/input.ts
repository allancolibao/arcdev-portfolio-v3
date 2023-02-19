export type InputProps = {
    id?: string;
    name: string;
    type?: string;
    value: string;
    onChange?: (e:  React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement >) => void;
    required?: boolean;
    placeholder?: string;
    rows?: number;
    isTextarea?: boolean;
}