interface LineupProps {
    persons: {
        first_name: string;
        image: string;
    }[];
}

export default function LineupNames({ persons }: LineupProps) {
    return <p className="font-bold">
        {persons.map(person => person.first_name).join(', ')}
    </p>
}