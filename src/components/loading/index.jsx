import './style.css'
export function Loading(){
    return(
        <div className='fixed bg-brand-dark z-100000 text-surface-cream h-full w-full flex justify-center items-center'>
            <div class="custom-loader bg-surface-cream"></div>
        </div>
    )
}

export default Loading;