import React from 'react';
interface Props {
    children: React.ReactNode;
}
const FooterList: React.FC<Props> = ({children}) => {
    return (
        <div className='w-full sm:w-1/2 md:w-1/4 lg:w-1/5 md-6 flex flex-col gap-2'>
            {children}
        </div>
    );
};

export default FooterList;