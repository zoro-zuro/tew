const Badge = ({ title, textColor }: { title: string, textColor?: string }) => {
    return (
        <div className="mb-[12px] flex items-center gap-2 bg-brand/10 w-fit px-3 sm:px-[14px] py-[8px] rounded-full">
            <div className="relative w-2 h-2">
                <div className="absolute inset-0 rounded-full bg-brand" />
                <div className="absolute inset-0 rounded-full bg-brand animate-ripple" />
            </div>
            <span className={`text-black text-[10px] sm:text-xs font-medium ${textColor || 'text-black'}`}>{title}</span>
        </div>
    )
}

export default Badge