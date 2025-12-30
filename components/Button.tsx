export default function Button({ onClick, name }: { onClick: () => void; name: string; }) {
    return (
        <button onClick={onClick} className="text-white  hover:underline underline-offset-4">
            {name}
        </button>
    );
}