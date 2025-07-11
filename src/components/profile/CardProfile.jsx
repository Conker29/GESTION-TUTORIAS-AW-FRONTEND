import storeProfile from "../../context/storeProfile"


export const CardProfile = () => {

    const {user} = storeProfile()  

    return (

        <div className="bg-white border border-slate-200 h-auto p-4 
                        flex flex-col items-center justify-between shadow-xl rounded-lg">
            <div className="relative">
                <img src="https://static.vecteezy.com/system/resources/previews/036/280/651/non_2x/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" width={120} height={120} />
                <label className="absolute bottom-0 right-0 bg-gray-300  text-white rounded-full p-2 cursor-pointer hover:bg-emerald-400">📤
                    <input type="file" accept="image/*" className="hidden" />
                </label>
            </div>
            
            <div className="self-start">
                <b>Nombre:</b><p className="inline-block ml-3">{user?.nombre}</p>
            </div>
            <div className="self-start">
                <b>Apellido:</b><p className="inline-block ml-3">{user?.apellido}</p>
            </div >
            <div className="self-start">
                <b>Teléfono:</b><p className="inline-block ml-3">{user?.celular}</p>
            </div>
            <div className="self-start">
                <b>Correo:</b><p className="inline-block ml-3">{user?.email}</p>
            </div>
        </div>
    )
}
