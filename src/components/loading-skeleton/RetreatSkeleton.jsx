import React from "react";
const RetreatSkeleton = () => {
    return <div className="h-full w-[100%] bg-pearl text-[16px] animate-pulse leading-[16px] md:leading-[20px] rounded-sm shadow-custom-shadow">
        <div className="p-[16px] pt-[8px]  md:p-[16px]">
            <div className="flex items-center justify-center max-w-[300px] md:max-w-[200px]  object-cover rounded-sm md:rounded-lg w-full h-[150px] dark:bg-gray-700">
                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
            </div>
            <div className="h-5 rounded-lg mt-[20px] md:mt-[26px]  dark:bg-gray-700 w-full mb-4"></div>
            <div className="h-4  rounded-sm bg-[#374151] md:bg-[#7d7a7a] my-[6px] mb-[6px md:my-[10px]"></div>
            <div className="h-3 rounded-full bg-[#374151] md:bg-[#292828]  max-w-[220px] w-full md:mt-[20px]"></div>
            <div className="h-3 rounded-full bg-[#374151] md:bg-[#292828] my-[6px] mb-[6px] md:my-[10px]  max-w-[200px] w-full"></div>
            <div className="h-3 rounded-full bg-[#7d7a7a] mb-[12px] md:mb-[14px] max-w-[120px] w-full"></div>
        </div>
    </div>
};

export default RetreatSkeleton;
