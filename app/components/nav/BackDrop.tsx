interface BackDropProps{
    onClick: ()=>void
}

const BackDrop:React.FC<BackDropProps> = () => {
    return (
        <div className="z-20 top-0 left-0 bg-slate-200 opacity-50 w-screen h-screen flex">
            
        </div>
    );
};

export default BackDrop;