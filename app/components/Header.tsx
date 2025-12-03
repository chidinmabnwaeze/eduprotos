type HeaderProps = {
    children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
    return (
        <div className="flex items-center justify-between">
            {children}
        </div>
    )
}