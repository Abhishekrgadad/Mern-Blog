import {useSelector} from 'react-redux';

export default function ThemeProvider({childern}){
    const {theme} = useSelector((state) => state.theme);
    return(
        <div className="">
        <div className="bg-white text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)] min-h-screen">
                    {childern}
                </div>
            

        </div>
    );
       
}