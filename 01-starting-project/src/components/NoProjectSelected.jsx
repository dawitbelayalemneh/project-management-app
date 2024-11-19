import noProjectImage from '../assets/no-projects.png'
import Buttons from './Buttons.jsx';

export default function NoProjectSeleted({onStartAddProject}) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage}
             alt="empty task list" 
             className="w-16 h-16 object-contain mx-auto" 
            />
            <h2 className="text-xl font-bold text-stone-500 my-4">No project selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started with a new one </p>
            <p>
                <Buttons onClick={onStartAddProject}>Create new project</Buttons>
            </p>
        </div>
    );
}