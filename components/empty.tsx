interface EmptyProps {
    label: string
}

export const Empty = ( { label }: EmptyProps) => {
    return (
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">{label}</h2>

        </div>
    )
}