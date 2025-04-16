import {Header,Footer} from './Navbar'
import { Outlet } from 'react-router-dom';

export default function MainContent()
{
    return(
        
            <div className="flex flex-col flex-1">
               <Header />
                    <div className="flex-1 p-4 overflow-y-auto bg-base-100">
                        <Outlet />
                    </div>
            </div>
        
    );
}