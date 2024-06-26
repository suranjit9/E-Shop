interface Props {
    title: string;
    center?:boolean;
}

const Heading:React.FC<Props> = ({title, center}) => {
    return (
        <div className={`${center ? "text-center" : "text-start"}`}>
            <h1 className="text-2xl font-bold">{title}</h1>
        </div>
    );
};

export default Heading;