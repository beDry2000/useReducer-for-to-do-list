import { useEffect, useState } from "react";

function Content() {
    const lessons = [
        {
            id: 1,
            name: 'React la gi? Tai sao nen hoc ReactJS?'
        },
        {
            id: 2,
            name: 'SPA/MPA la gi?'
        },
        {
            id: 3,
            name: 'Arrow function'
        }
    ]
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {
        const handleComment = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <ul style={{paddingLeft: 60}}>
        {
            lessons.map(({id, name}) => (
                <li key={id} style={{color: lessonId == id ? 'red':'#333'}}
                    onClick={() => setLessonId(id)}
                >
                    {name}
                </li>
            ))
        }
        </ul>
    )
}

export default Content;

// function Content() {
//     const [avatar, setAvatar] = useState();

//     useEffect(() => {

//         return () => {
//             avatar && URL.revokeObjectURL(avatar.link);
            
//         }
//     },[avatar])    

//     const handlePreview = (e) => {
//         const file = e.target.files[0];
//         file.link = URL.createObjectURL(file);
//         console.log(file);

//         setAvatar(file);
//     }
//     return (
//         <div>
//             <input
//                 type='file'
//                 onChange={handlePreview}
//             />
//             {
//                 avatar && <img src={avatar.link} width='40%' />
//             }

//         </div>
//     )
// }


