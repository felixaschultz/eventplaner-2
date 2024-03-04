export default function Card({entry}) {
    const date = new Intl.DateTimeFormat("da-DK").format(new Date(entry.date));

    const formattedDate = `${date}`;

    return (
        <div className="card p-8 text-slate-50 bg-slate-900">
            <h1 className="text-1xl font-bold">{entry.title}</h1>
            <p>{entry.description}</p>
            <time>{formattedDate}</time>
        </div>
    );
}